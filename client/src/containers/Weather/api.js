import 'whatwg-fetch'
import getSearchUrl from '../../baseUrlWeather'

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  throw new Error(error)
}

function search(query) {
  return fetch(getSearchUrl(query)).then(onSuccess, onError)
}

export function searchByCityName(city) {
  return search(city)
}

export function searchByZip(zip) {
  return search(`&zip=${zip}`)
}
