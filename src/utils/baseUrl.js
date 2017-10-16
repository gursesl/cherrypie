export default function getBaseUrl() {
  if (process.env.ENABLE_MOCK_API === true || process.env.ENABLE_MOCK_API === 'true') {
    return process.env.MOCK_API_URL
  }
  return process.env.API_URL
}
