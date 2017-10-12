// REFERENCE: SAGAS TEST
/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { runSaga } from 'redux-saga'
import { put, take, takeLatest, takeEvery, call } from 'redux-saga/effects'
import sagaHelper from 'redux-saga-testing'
import { watchUsersFetchSaga, usersFetchSaga } from '../sagas'
import * as c from '../constants'
import * as a from '../actions'
import { getUsers } from '../../../api/userApi'

const mockUsers = [
  {
    id: '95617189',
    firstName: 'Elfrieda',
    lastName: 'Frank',
    email: 'Ada20@hotmail.com',
  },
  {
    id: '95617188',
    firstName: 'Jim',
    lastName: 'Smith',
    email: 'jsmith@mail.com',
  },
]

const MOCK_RESPONSE = {
  users: mockUsers,
}


describe('UserListContainer:sagas', () => {
  const genWatch = watchUsersFetchSaga()
  const genFetch = usersFetchSaga()

  // STEP 1: WATCH
  it('should watch for a USERS_FETCH_START action', () => {
    const expectedValue = takeEvery(c.USERS_FETCH_START, usersFetchSaga)
    expect(genWatch.next().value).toEqual(expectedValue)
  })

  describe('Scenario 2: The API returns expected data', () => {
    const it = sagaHelper(usersFetchSaga())
    const api = jest.fn()

    it('should have called the mock API first, which we are going to specify the results of', (result) => {
      expect(result).toEqual(call(getUsers));

      // Here we specify what the API should have returned.
      // Again, the API is not called so we have to give its expected response.
      return MOCK_RESPONSE;
    });

    it('and then trigger an action with the transformed data we got from the API', (result) => {
      expect(result).toEqual(put(a.usersFetchSuccess(MOCK_RESPONSE)))
      // console.log(result.PUT.action.payload.users)
    });

    it('and then nothing', (result) => {
      expect(result).toBeUndefined();
    });
  })

  describe('Scenario 3: The API throws an exception', () => {
    const it = sagaHelper(usersFetchSaga())
    const api = jest.fn()

    it('should have called the mock API first, which we are going to specify the results of', (result) => {
      expect(result).toEqual(call(getUsers));

      // Here we specify what the API should have returned.
      // Again, the API is not called so we have to give its expected response.
      return MOCK_RESPONSE;
    })

    it('should have called the mock API first, which will throw an exception', (result) => {
      expect(result).toEqual(put(a.usersFetchSuccess(MOCK_RESPONSE)))
      // Here we pretend that the API threw an exception.
      // We don't 'throw' here but we return an error, which will be considered by the
      // redux-saga-testing helper to be an exception to throw on the generator
      return new Error('Something went wrong');
    })

    it('and then trigger an error action with the error message', (result) => {
      expect(result).toEqual(put(a.usersFetchFailure('Something went wrong')));
    })

    it('and then nothing', (result) => {
      expect(result).toBeUndefined();
    })
  })
})
