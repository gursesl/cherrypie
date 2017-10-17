import * as c from './constants'

export default function getBaseUrl() {
  if (process.env.ENABLE_MOCK_API === true || process.env.ENABLE_MOCK_API === 'true') {
    return c.MOCK_API_URL
  }
  return c.API_URL
}
