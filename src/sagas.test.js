import { delay } from 'redux-saga'
import { call, put, all } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import rootSaga, * as s from './sagas'
import { watchIncrementAsync } from './containers/CounterContainer/sagas'
import { watchUsersFetchSaga } from './containers/UserListContainer/sagas'
import { watchWeatherFetchSaga } from './containers/WeatherContainer/sagas'

describe('App:sagas:helloSaga', () => {
  const it = sagaHelper(s.helloSaga())

  // STEP 1: Should call(delay(1000))
  it('chould call(delay(1000))', (result) => {
    expect((result)).toEqual(call(delay, 1000))
  })

  // STEP 2: Should put increment action
  it('should put increment action', (result) => {
    expect((result)).toEqual(put({ type: 'IMAGINARY_HELLO_ACTION' }))
  })

  // STEP 3: Be done
  it('and then nothing', (result) => {
    expect((result)).toBeUndefined();
  })
})

describe('App:sagas:rootSaga', () => {
  const it = sagaHelper(rootSaga())
  // STEP 1: Call delay
  it('should be watching', (result) => {
    expect((result)).toEqual(all([
      s.helloSaga(),
      watchIncrementAsync(),
      watchUsersFetchSaga(),
      watchWeatherFetchSaga()]))
  })
  // STEP 2: Be done
  it('and then nothing', (result) => {
    expect((result)).toBeUndefined();
  })
})
