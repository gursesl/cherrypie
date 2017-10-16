// REFERENCE: SELECTOR TEST
import { fromJS } from 'immutable'
import * as s from '../selectors'
import {
  SELECTOR_WEATHER_ZIP,
  SELECTOR_WEATHER_CITY,
  SELECTOR_WEATHER_RESULTS,
  SELECTOR_WEATHER_ERROR,
} from '../constants'
import * as m from './mockdata'

const rootSelector = s.selectWeather(m.mockedState)

describe('WatherContainer:selectors', () => {
  it('should select the global state', () => {
    expect(rootSelector).toEqual(m.subState)
  })

  it('should select ZIP selector with makeSelectZip()', () => {
    const zipSelector = s.makeSelectZip()(m.mockedState)
    expect(rootSelector.get(SELECTOR_WEATHER_ZIP)).toBe('20165')
    expect(zipSelector).toEqual(m.subState.get(SELECTOR_WEATHER_ZIP))
  })

  it('should select CITY selector with makeSelectCity()', () => {
    const zipSelector = s.makeSelectCity()(m.mockedState)
    expect(rootSelector.get(SELECTOR_WEATHER_CITY)).toBe('Sterling')
    expect(zipSelector).toEqual(m.subState.get(SELECTOR_WEATHER_CITY))
  })

  it('should select RESULTS selector with makeSelectResults()', () => {
    const zipSelector = s.makeSelectResults()(m.mockedState)
    expect(rootSelector.get(SELECTOR_WEATHER_RESULTS)).toBe(fromJS({}))
    expect(zipSelector).toEqual(m.subState.get(SELECTOR_WEATHER_RESULTS))
  })

  it('should select ERROR selector with makeSelectError()', () => {
    const zipSelector = s.makeSelectError()(m.mockedState)
    expect(rootSelector.get(SELECTOR_WEATHER_ERROR)).toBe('Load error')
    expect(zipSelector).toEqual(m.subState.get(SELECTOR_WEATHER_ERROR))
  })

  it('handles the rootSelector snapshot', () => {
    expect(rootSelector).toMatchSnapshot()
  })

  it('handles the SELECTOR_WEATHER_ZIP snapshot', () => {
    expect(rootSelector.get(SELECTOR_WEATHER_ZIP)).toMatchSnapshot()
  })

  it('handles the SELECTOR_WEATHER_CITY snapshot', () => {
    expect(rootSelector.get(SELECTOR_WEATHER_CITY)).toMatchSnapshot()
  })

  it('handles the SELECTOR_WEATHER_RESULTS snapshot', () => {
    expect(rootSelector.get(SELECTOR_WEATHER_RESULTS)).toMatchSnapshot()
  })

  it('handles the SELECTOR_WEATHER_ERROR snapshot', () => {
    expect(rootSelector.get(SELECTOR_WEATHER_ERROR)).toMatchSnapshot()
  })
})
