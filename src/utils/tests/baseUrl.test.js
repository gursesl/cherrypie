import * as c from '../constants'
import getBaseUrl from '../baseUrl'

describe('getBaseUrl', () => {
  it('should return MOCK_API_URL when env variable set to true', () => {
    process.env.ENABLE_MOCK_API = true
    expect(getBaseUrl()).toEqual(c.MOCK_API_URL)
  })

  it('should return MOCK_API_URL when env variable set to "true"', () => {
    process.env.ENABLE_MOCK_API = 'true'
    expect(getBaseUrl()).toEqual(c.MOCK_API_URL)
  })

  it('should return MOCK_API_URL when env variable set', () => {
    process.env.ENABLE_MOCK_API = false
    expect(getBaseUrl()).toEqual(c.API_URL)
  })

  it('should return MOCK_API_URL when env variable set', () => {
    process.env.ENABLE_MOCK_API = 'false'
    expect(getBaseUrl()).toEqual(c.API_URL)
  })
})
