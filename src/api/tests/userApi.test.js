import nock from 'nock'
import dotenv from 'dotenv'
import * as api from '../userApi'

const mockUsers = [
  {
    id: 95617189,
    firstName: 'Elfrieda',
    lastName: 'Frank',
    email: 'Ada20@hotmail.com',
  },
  {
    id: 95617188,
    firstName: 'Jim',
    lastName: 'Smith',
    email: 'jsmith@mail.com',
  },
]
/* eslint-disable arrow-body-style */
const mockResponse = (status, statusText, response) => {
  return new window.Response(response, {
    status,
    statusText,
    headers: {
      'Content-type': 'application/json',
    },
  })
}

describe('Users API', () => {
  beforeEach(() => {
    nock.disableNetConnect()
    nock.enableNetConnect('127.0.0.1')
    dotenv.config('../../../.env')
  })

  afterEach(() => {
    nock.cleanAll()
    nock.enableNetConnect()
  })

  it('should get users using nock', (done) => {
    // console.log(process.env.MOCK_API_URL)
    nock(process.env.MOCK_API_URL)
      .get('/users')
      .reply(200, mockUsers, {
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      })

    api.getUsers().then((response) => {
      expect(response).toEqual(mockUsers)
      done()
    })
  })

  it('should delete users', (done) => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(mockUsers))));

    api.deleteUser(95617189).then((response) => {
      expect(response).toEqual(mockUsers)
      done()
    })
  })

  it('should get users w/o nock', (done) => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve(mockResponse(200, null, JSON.stringify(mockUsers))));

    api.getUsers().then((response) => {
      expect(response).toEqual(mockUsers)
      done()
    })
  })

  it('should handle errors gracefully w/o nock', (done) => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject(new Error('Some critical error')))

    api.getUsers().catch((reason) => {
      expect(reason.message).toBe('Error: Some critical error')
      done()
    })
  })
})
