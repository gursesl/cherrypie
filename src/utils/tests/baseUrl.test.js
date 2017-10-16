import getBaseUrl from '../baseUrl'

describe('getBaseUrl', () => {
  it('should return MOCK_API_URL when env variable set to true', () => {
    process.env.ENABLE_MOCK_API = true
    expect(getBaseUrl()).toEqual(process.env.MOCK_API_URL)
  })

  it('should return MOCK_API_URL when env variable set to "true"', () => {
    process.env.ENABLE_MOCK_API = 'true'
    expect(getBaseUrl()).toEqual(process.env.MOCK_API_URL)
  })

  it('should return MOCK_API_URL when env variable set', () => {
    process.env.ENABLE_MOCK_API = false
    expect(getBaseUrl()).toEqual(process.env.API_URL)
  })

  it('should return MOCK_API_URL when env variable set', () => {
    process.env.ENABLE_MOCK_API = 'false'
    expect(getBaseUrl()).toEqual(process.env.API_URL)
  })
})
