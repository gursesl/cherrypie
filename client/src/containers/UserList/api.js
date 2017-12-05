import 'whatwg-fetch'
import getBaseUrl from '../../baseUrl'

const baseUrl = getBaseUrl()

function onSuccess(response) {
  return response.json()
}

function onError(error) {
  throw new Error(error)
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE',
  })

  return fetch(request).then(onSuccess, onError)
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError)
}

export function getUsers() {
  // console.log('api.getUsers():', baseUrl)
  return get('/users')
}

export function deleteUser(id) {
  return del(`/users/${id}`)
}
