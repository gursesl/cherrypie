import * as c from '../constants'
import getSearchUrl from '../baseUrlWeather'

describe('getBaseUrl', () => {
  it('should return MOCK_API_URL when env variable set to true', () => {
    process.env.ENABLE_MOCK_API = true
    expect(getSearchUrl('Dallas')).toEqual(c.MOCK_WEATHER_API_URL)
  })

  it('should return MOCK_API_URL when env variable set to "true"', () => {
    process.env.ENABLE_MOCK_API = 'true'
    expect(getSearchUrl('Dallas')).toEqual(c.MOCK_WEATHER_API_URL)
  })

  it('should return MOCK_API_URL when env variable set', () => {
    process.env.ENABLE_MOCK_API = false
    expect(getSearchUrl('Dallas')).toEqual(`${c.WEATHER_API_URL}?APPID=${process.env.OWM_API_KEY}&q=Dallas`)
  })

  it('should return MOCK_API_URL when env variable set', () => {
    process.env.ENABLE_MOCK_API = 'false'
    expect(getSearchUrl('Dallas')).toEqual(`${c.WEATHER_API_URL}?APPID=${process.env.OWM_API_KEY}&q=Dallas`)
  })
})
