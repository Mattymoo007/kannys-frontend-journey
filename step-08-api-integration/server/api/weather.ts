// Server API route — proxies weather requests to OpenWeatherMap
// The API key stays on the server and is never sent to the browser
export default defineEventHandler(async (event) => {
  const { owmApiKey } = useRuntimeConfig()
  const query = getQuery(event)
  const city = (query.city as string) ?? ''

  if (!city) {
    throw createError({ statusCode: 400, statusMessage: 'Missing "city" query parameter' })
  }

  if (!owmApiKey) {
    throw createError({ statusCode: 500, statusMessage: 'OWM_API_KEY not configured on the server' })
  }

  try {
    // Current weather
    const weather = await $fetch<Record<string, any>>(
      'https://api.openweathermap.org/data/2.5/weather',
      { query: { q: city, appid: owmApiKey, units: 'metric' } },
    )

    return weather
  } catch (err: any) {
    const status = err?.response?.status ?? err?.statusCode ?? 500
    const message =
      status === 404
        ? `City "${city}" not found`
        : `Weather API error: ${err?.message ?? 'unknown'}`

    throw createError({ statusCode: status, statusMessage: message })
  }
})
