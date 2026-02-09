// Composable — wraps useFetch calls for weather + forecast
export interface CurrentWeather {
  name: string
  sys: { country: string }
  main: { temp: number; feels_like: number; humidity: number; pressure: number; temp_min: number; temp_max: number }
  weather: { id: number; main: string; description: string; icon: string }[]
  wind: { speed: number; deg: number }
  clouds: { all: number }
  visibility: number
  dt: number
  timezone: number
}

export interface ForecastItem {
  dt: number
  main: { temp: number; temp_min: number; temp_max: number; humidity: number }
  weather: { id: number; main: string; description: string; icon: string }[]
  wind: { speed: number }
  dt_txt: string
}

export interface ForecastResponse {
  list: ForecastItem[]
  city: { name: string; country: string }
}

export function useWeather() {
  const city = ref('')
  const searchQuery = ref('')

  // Current weather
  const {
    data: weather,
    status: weatherStatus,
    error: weatherError,
    refresh: refreshWeather,
  } = useFetch<CurrentWeather>('/api/weather', {
    query: { city: searchQuery },
    immediate: false,
    watch: false,
  })

  // 5-day forecast
  const {
    data: forecast,
    status: forecastStatus,
    error: forecastError,
    refresh: refreshForecast,
  } = useFetch<ForecastResponse>('/api/forecast', {
    query: { city: searchQuery },
    immediate: false,
    watch: false,
  })

  const isLoading = computed(
    () => weatherStatus.value === 'pending' || forecastStatus.value === 'pending',
  )

  const error = computed(() => {
    const e = weatherError.value || forecastError.value
    if (!e) return null
    // Extract a human-readable message
    return (e as any)?.data?.statusMessage ?? (e as any)?.message ?? 'Something went wrong'
  })

  async function search(q?: string) {
    const query = (q ?? city.value).trim()
    if (!query) return
    searchQuery.value = query
    await Promise.all([refreshWeather(), refreshForecast()])
  }

  // Helpers
  function iconUrl(code: string) {
    return `https://openweathermap.org/img/wn/${code}@2x.png`
  }

  function formatDate(unix: number, timezoneOffset = 0) {
    const date = new Date((unix + timezoneOffset) * 1000)
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC',
    })
  }

  function formatTime(unix: number, timezoneOffset = 0) {
    const date = new Date((unix + timezoneOffset) * 1000)
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'UTC',
    })
  }

  function windDirection(deg: number) {
    const dirs = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    return dirs[Math.round(deg / 45) % 8]
  }

  // Group forecast items by day (pick one reading per day at ~12:00)
  function dailyForecast(list: ForecastItem[]) {
    const days = new Map<string, ForecastItem>()
    for (const item of list) {
      const day = item.dt_txt.split(' ')[0]
      const hour = parseInt(item.dt_txt.split(' ')[1].split(':')[0])
      // Prefer the 12:00 reading, but fall back to whatever is available
      if (!days.has(day) || hour === 12) {
        days.set(day, item)
      }
    }
    return [...days.values()].slice(0, 5)
  }

  return {
    city,
    weather,
    forecast,
    isLoading,
    error,
    search,
    iconUrl,
    formatDate,
    formatTime,
    windDirection,
    dailyForecast,
  }
}
