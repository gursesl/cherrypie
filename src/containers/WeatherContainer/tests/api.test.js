import { fromJS } from 'immutable'
import * as api from '../api'
import * as m from './mockdata'

describe('API:Users', () => {
  beforeEach(() => {
    fetch.mockResponse(JSON.stringify(m.mockData.toJS()))
  });

  it('should retrieve search by city name', (done) => {
    api.searchByCityName('Dallas').then((response) => {
      expect(fromJS(response)).toEqual(m.mockData)
      done()
    })
  })

  it('should retrieve search by city name', (done) => {
    api.searchByZip('20167').then((response) => {
      expect(fromJS(response)).toEqual(m.mockData)
      done()
    })
  })

  it('should handle errors gracefully w/o nock', (done) => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject(new Error('Some critical error')))

    api.searchByCityName().catch((reason) => {
      expect(reason.message).toBe('Error: Some critical error')
      done()
    })
  })
})
