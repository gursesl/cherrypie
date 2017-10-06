// REFERENCE: SAGAS TEST
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware, { runSaga } from 'redux-saga'
import { mockSaga } from 'redux-saga-mock'
import { watchUsersFetchSaga, usersFetchSaga } from '../sagas'
import * as c from '../constants'
import { getUsers } from '../../../api/userApi'


// import { runSaga } from 'redux-saga'

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





describe('UserListContainer:sagas', () => {

  it('usersFetchSaga test', () => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))

    const testSaga = mockSaga(usersFetchSaga)

    testSaga.stubCall(getUsers, () => Promise.resolve(MOCK_RESPONSE))

    return sagaMiddleware.run(testSaga).done
      .then(() => {

        // console.log("I am resoved")
        const query = testSaga.query()

        // console.log(query)

        // expect(query.putAction({ type: c.USERS_FETCH_SUCCESS, payload: mockUsers })).toBeDefined()
        // expect(query.putAction({ type: c.USERS_FETCH_FAILURE, payload: 'sdsd' })).toBeDefined()

        // console.log(query)
        // expect(query.callWithArgs(getUsers, 'data')).toBeDefined()
        // expect(query.putAction({ type: c.USERS_FETCH_SUCCESS, data: mockUsers})).toBeDefined()
      })
  })

  it('should work', () => {

  })

  it('should intercepts USERS_FETCH_START actions', () => {

  })

  it('should put USERS_FETCH_SUCCESS action if successful', () => {

  })

  it('should put USERS_FETCH_FAILURE action when failed', () => {

  })

})
