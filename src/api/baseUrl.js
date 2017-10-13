function getQueryStringParameterByName(name, url) {
  let mUrl
  if (!url) mUrl = window.location.href;
  const mMame = name.replace(/[[\]]/g, '\\$&');
  const regex = new RegExp(`[?&]${mMame}(=([^&#]*)|&|#|$)`)
  const results = regex.exec(mUrl)
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001' : 'https://cherrypieapp.herokuapp.com';
}
