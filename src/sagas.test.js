import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { delay, runSaga } from 'redux-saga'
import { mockSaga } from 'redux-saga-mock'
import { helloSaga, watchIncrementAsync, incrementAsync } from './sagas'
import * as c from './containers/CounterContainer/constants'

// const MOCK_RESPONSE = {
//   json: () => Promise.resolve({ field: 'some data' })
// }

const mockUsers = [
  {
    id: "95617189",
    firstName: "Elfrieda",
    lastName: "Frank",
    email: "Ada20@hotmail.com"
  },
  {
    id: "95617188",
    firstName: "Jim",
    lastName: "Smith",
    email: "jsmith@mail.com"
  },
]


const reducer = s => s
const initialState = {}
// const MOCK_RESPONSE = {
//   json: () => Promise.resolve({
//     users: mockUsers
//   })
// }

const MOCK_RESPONSE = {
  users: mockUsers
}

describe('App:sagas:helloSaga', () => {

  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))

  const testSaga = mockSaga(helloSaga)

  it('should have a proper CALL effect', () => {

    // testSaga.stubCall(getUsers, () => Promise.resolve(MOCK_RESPONSE))

    return sagaMiddleware.run(testSaga).done
      .then(() => {
        const query = testSaga.query()
        expect(query.effects[1].CALL.fn).toBe(delay)
        expect(query.effects[1].CALL.args).toEqual([1000])

        // console.log(query.effects[1].CALL)
        // console.log(query.effects[2].PUT)
        // console.log(query.effect('PUT'))
        // expect(query.putAction({ type: c.INCREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
        // expect(query.putAction({ type: c.DECREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
        // assert.isTrue(query.callWithArgs(someFunction, 'some data').isPresent)
        // assert.isTrue(query.putAction({ type: c.INCREMENT_ACTION }).isPresent)
      })

  })

  it('should have a proper PUT effect', () => {

    // testSaga.stubCall(getUsers, () => Promise.resolve(MOCK_RESPONSE))

    return sagaMiddleware.run(testSaga).done
      .then(() => {
        const query = testSaga.query()
        expect(query.effects[2].PUT.action).toEqual({ type: c.INCREMENT_ACTION })
        // expect(query.effects[1].CALL.args).toEqual([1000])



        // console.log(query.effects[2].PUT)
        // console.log(query.effects[1].CALL)
        // expect(query.putAction({ type: c.INCREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
        // expect(query.putAction({ type: c.DECREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
        // assert.isTrue(query.callWithArgs(someFunction, 'some data').isPresent)
        // assert.isTrue(query.putAction({ type: c.INCREMENT_ACTION }).isPresent)
      })

  })


})

describe('App:sagas:incrementSaga', () => {

    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))

    const testSaga = mockSaga(incrementAsync)

    it('should have a proper CALL effect', () => {

      // testSaga.stubCall(getUsers, () => Promise.resolve(MOCK_RESPONSE))

      return sagaMiddleware.run(testSaga).done
        .then(() => {
          const query = testSaga.query()
          expect(query.effects[0].CALL.fn).toBe(delay)
          expect(query.effects[0].CALL.args).toEqual([1000])

          console.log(query.effects)
          // console.log(query.effects[2].PUT)
          // console.log(query.effect('PUT'))
          // expect(query.putAction({ type: c.INCREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
          // expect(query.putAction({ type: c.DECREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
          // assert.isTrue(query.callWithArgs(someFunction, 'some data').isPresent)
          // assert.isTrue(query.putAction({ type: c.INCREMENT_ACTION }).isPresent)
        })

    })

    it('should have a proper PUT effect', () => {

      // testSaga.stubCall(getUsers, () => Promise.resolve(MOCK_RESPONSE))

      return sagaMiddleware.run(testSaga).done
        .then(() => {
          const query = testSaga.query()
          expect(query.effects[1].PUT.action).toEqual({ type: c.INCREMENT_ACTION })
          // expect(query.effects[1].CALL.args).toEqual([1000])



          // console.log(query.effects[2].PUT)
          // console.log(query.effects[1].CALL)
          // expect(query.putAction({ type: c.INCREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
          // expect(query.putAction({ type: c.DECREMENT_ACTION, payload: 'sdsd' })).toBeTruthy()
          // assert.isTrue(query.callWithArgs(someFunction, 'some data').isPresent)
          // assert.isTrue(query.putAction({ type: c.INCREMENT_ACTION }).isPresent)
        })

    })


  })
