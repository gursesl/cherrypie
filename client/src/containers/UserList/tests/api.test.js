import { fromJS } from 'immutable'
import * as api from '../api'
import * as m from './mockdata'

describe('API:Users', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(m.mockUsers.toJS()))
  });

  it('should get users', (done) => {
    api.getUsers().then((response) => {
      expect(fromJS(response)).toEqual(m.mockUsers)
      done()
    })
  })

  it('should delete users', (done) => {
    api.deleteUser(95617189).then((response) => {
      expect(fromJS(response)).toEqual(m.mockUsers)
      done()
    })
  })

  it('should handle errors gracefully', (done) => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject(new Error('Some critical error')))

    api.getUsers().catch((reason) => {
      expect(reason.message).toBe('Error: Some critical error')
      done()
    })
  })
})
