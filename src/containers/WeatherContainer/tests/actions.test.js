import configureStore from 'redux-mock-store'
import {
  WEATHER_DATA_FETCH_START,
  WEATHER_DATA_FETCH_SUCCESS,
  WEATHER_DATA_FETCH_FAILURE,
} from '../constants'
import * as a from '../actions'

const mockStore = configureStore()
const mockData = []
const mockErr = { type: 1, message: 'An error occurred.' }
let store
let actions

describe('WeatherContainer:actions', () => {
  beforeEach(() => {
    store = mockStore({})
  })

  it('should dispatch a.weatherDataFetchStart action', () => {
    store.dispatch(a.weatherDataFetchStart())
    actions = store.getActions()
    const expectedPayload = { type: WEATHER_DATA_FETCH_START }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch a.weatherDataFetchSuccess action', () => {
    store.dispatch(a.weatherDataFetchSuccess(mockData))
    actions = store.getActions()
    const expectedPayload = {
      type: WEATHER_DATA_FETCH_SUCCESS,
      payload: mockData,
    }
    expect(actions).toEqual([expectedPayload])
  })

  it('should dispatch a.weatherDataFetchFailure action', () => {
    store.dispatch(a.weatherDataFetchFailure(mockErr))
    actions = store.getActions()
    const expectedPayload = {
      type: WEATHER_DATA_FETCH_FAILURE,
      error: mockErr,
    }
    expect(actions).toEqual([expectedPayload])
  })
})
