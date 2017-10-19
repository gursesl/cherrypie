import * as c from './constants'

export default function getSearchUrl(query) {
  if (process.env.NODE_ENV === 'development') {
    if (process.env.ENABLE_MOCK_API === true || process.env.ENABLE_MOCK_API === 'true') {
      return c.MOCK_WEATHER_API_URL
    }
    return `${c.WEATHER_API_URL}?q=${query}`
  }
  return `${c.HEROKU_WEATHER_API_URL}?q=${query}`
}
