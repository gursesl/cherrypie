import { delay } from 'redux-saga'
import sagaHelper from 'redux-saga-testing'
import { call, put, takeEvery } from 'redux-saga/effects'
import * as c from '../constants'
import { watchIncrementAsync, incrementAsync } from '../sagas'

describe('CounterContainer:sagas:watchIncrementAsync', () => {
  const it = sagaHelper(watchIncrementAsync())
  // STEP 1: Watch
  it('should be watching', (result) => {
    expect(result).toEqual(takeEvery(c.INCREMENT_ACTION_ASYNC, incrementAsync))
  })
  // STEP 2: Be done
  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  })
})

describe('CounterContainer:sagas:incrementAsync', () => {
  const it = sagaHelper(incrementAsync())
  // STEP 1: Call delay
  it('should call delay 1000', (result) => {
    expect(result).toEqual(call(delay, 1000))
  })
  // STEP 2: Put increment action
  it('should put increment action', (result) => {
    expect(result).toEqual(put({ type: c.INCREMENT_ACTION }))
  })
  // STEP 3: Be done
  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  })
})
