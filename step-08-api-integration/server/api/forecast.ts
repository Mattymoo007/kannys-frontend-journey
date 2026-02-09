// Server API route — proxies 5-day / 3-hour forecast requests
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
    const forecast = await $fetch<Record<string, any>>(
      'https://api.openweathermap.org/data/2.5/forecast',
      { query: { q: city, appid: owmApiKey, units: 'metric' } },
    )

    return forecast
  } catch (err: any) {
    const status = err?.response?.status ?? err?.statusCode ?? 500
    const message =
      status === 404
        ? `City "${city}" not found`
        : `Forecast API error: ${err?.message ?? 'unknown'}`

    throw createError({ statusCode: status, statusMessage: message })
  }
})
