import { fromJS } from 'immutable'
import initialState from '../initialState'
import weatherContainerReducer, { processResultData } from '../reducer'
import * as a from '../actions'
import * as c from '../constants'
import * as m from './mockdata'

const state = initialState

describe('WeatherContainer:reducer', () => {
  it('should return the initial state', () => {
    expect(weatherContainerReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle weatherDataFetchStart action correctly', () => {
    expect(weatherContainerReducer(state, a.weatherDataFetchStart())).toEqual(state)
  })

  it('should handle search by zip code', () => {
    expect(weatherContainerReducer(
      state.set(c.SELECTOR_WEATHER_ZIP, ''),
      a.weatherDataFetchStart('20002')
    )).toEqual(state.set(c.SELECTOR_WEATHER_ZIP, '20002'))
  })

  it('should handle search by empty zip code', () => {
    expect(weatherContainerReducer(
      state.set(c.SELECTOR_WEATHER_ZIP, ''),
      a.weatherDataFetchStart('')
    )).toEqual(state.set(c.SELECTOR_WEATHER_ZIP, ''))
  })

  it('should handle search by city name', () => {
    expect(weatherContainerReducer(
      state.set(c.SELECTOR_WEATHER_CITY, ''),
      a.weatherDataFetchStart('Washington, DC')
    )).toEqual(state.set(c.SELECTOR_WEATHER_CITY, 'Washington, DC'))
  })

  it('should handle search by empty city name', () => {
    expect(weatherContainerReducer(
      state.set(c.SELECTOR_WEATHER_CITY, ''),
      a.weatherDataFetchStart('')
    )).toEqual(state.set(c.SELECTOR_WEATHER_CITY, ''))
  })

  it('should handle weatherDataFetchSuccess action correctly with a payload', () => {
    const expectedState = state.set(c.SELECTOR_WEATHER_RESULTS, processResultData(m.mockData.toJS()))
    expect(weatherContainerReducer(
      state,
      a.weatherDataFetchSuccess(m.mockData.toJS())
    )).toEqual(expectedState)
  })

  it('should handle weatherDataFetchSuccess action correctly w/o a payload', () => {
    const expectedState = state.set(c.SELECTOR_WEATHER_RESULTS, fromJS([]))
    expect(weatherContainerReducer(state, a.weatherDataFetchSuccess())).toEqual(expectedState)
  })

  it('should handle weatherDataFetchFailure action correctly with a load', () => {
    const expectedState = state.set(c.SELECTOR_WEATHER_ERROR, m.mockError)
    expect(weatherContainerReducer(
      state,
      a.weatherDataFetchFailure(m.mockError)
    )).toEqual(expectedState)
  })

  it('should handle weatherDataFetchFailure action correctly w/o a load', () => {
    const expectedState = state.set(c.SELECTOR_WEATHER_ERROR, '')
    expect(weatherContainerReducer(state, a.weatherDataFetchFailure(''))).toEqual(expectedState)
  })

  // Data processor test
  it('should process result data correctly', () => {
    expect(processResultData(m.mockData.toJS())).toEqual(m.processedMockData)
  })

  // Snapshot tests
  it('handles the weatherDataFetchStart action snapshot', () => {
    expect(weatherContainerReducer(state, a.weatherDataFetchStart(fromJS({
      type: c.WEATHER_DATA_FETCH_START,
      payload: 'Sterling',
    })))).toMatchSnapshot()
  })

  it('handles the weatherDataFetchSuccess action snapshot', () => {
    expect(weatherContainerReducer(state, a.weatherDataFetchSuccess(m.mockData.toJS()))).toMatchSnapshot()
  })

  it('handles the weatherDataFetchFailure action snapshot', () => {
    expect(weatherContainerReducer(state, a.weatherDataFetchFailure(m.mockError))).toMatchSnapshot()
  })
})
