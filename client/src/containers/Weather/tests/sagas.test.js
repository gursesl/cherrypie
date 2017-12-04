// REFERENCE: SAGAS TEST
import { put, takeEvery, call } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { watchWeatherFetchSaga, weatherFetchSaga } from '../sagas'
import * as c from '../constants'
import * as a from '../actions'
import { searchByCityName } from '../api'
import { mockData } from './mockdata'

const MOCK_RESPONSE = {
  results: mockData,
}

describe('WeatherContainer:sagas', () => {
  const genWatch = watchWeatherFetchSaga()

  // STEP 1: WATCH
  it('should watch for a WEATHER_DATA_FETCH_START action', () => {
    const expectedValue = takeEvery(c.WEATHER_DATA_FETCH_START, weatherFetchSaga)
    expect(genWatch.next().value).toEqual(expectedValue)
  })

  describe('Scenario 2: The API returns expected data', () => {
    const it = sagaHelper(weatherFetchSaga(a.weatherDataFetchStart('Dallas')))
    jest.fn()

    it('should have called the mock API first, which we are going to specify the results of', (result) => {
      expect(result).toEqual(call(searchByCityName, 'Dallas'));

      // Here we specify what the API should have returned.
      // Again, the API is not called so we have to give its expected response.
      return MOCK_RESPONSE;
    });

    it('and then trigger an action with the transformed data we got from the API', (result) => {
      expect(result).toEqual(put(a.weatherDataFetchSuccess(MOCK_RESPONSE)))
    });

    it('and then nothing', (result) => {
      expect(result).toBeUndefined();
    });
  })

  describe('Scenario 3: The API throws an exception', () => {
    const it = sagaHelper(weatherFetchSaga(a.weatherDataFetchStart('Dallas')))
    jest.fn()

    it('should have called the mock API first, which we are going to specify the results of', (result) => {
      expect(result).toEqual(call(searchByCityName, 'Dallas'));

      // Here we specify what the API should have returned.
      // Again, the API is not called so we have to give its expected response.
      return MOCK_RESPONSE;
    })

    it('should have called the mock API first, which will throw an exception', (result) => {
      expect(result).toEqual(put(a.weatherDataFetchSuccess(MOCK_RESPONSE)))
      // Here we pretend that the API threw an exception.
      // We don't 'throw' here but we return an error, which will be considered by the
      // redux-saga-testing helper to be an exception to throw on the generator
      return new Error('Something went wrong');
    })

    it('and then trigger an error action with the error message', (result) => {
      expect(result).toEqual(put(a.weatherDataFetchFailure('Something went wrong')));
    })

    it('and then nothing', (result) => {
      expect(result).toBeUndefined();
    })
  })
})
