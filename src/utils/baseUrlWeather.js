export default function getBaseUrl() {
  if (process.env.ENABLE_MOCK_API === true || process.env.ENABLE_MOCK_API === 'true') {
    return process.env.MOCK_WEATHER_API_URL
  }
  return process.env.WEATHER_API_URL
}

export function getSearchUrl(query) {
  if (process.env.ENABLE_MOCK_API === true || process.env.ENABLE_MOCK_API === 'true') {
    return process.env.MOCK_WEATHER_API_URL
  }
  return `${process.env.WEATHER_API_URL}?APPID=${process.env.OWM_API_KEY}&q=${query}`
}
