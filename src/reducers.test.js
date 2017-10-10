import rootReducer, { combinedReducer } from './reducers'
import { SELECTOR_COUNT } from './containers/CounterContainer/constants'
import { SELECTOR_USERS } from './containers/UserListContainer/constants'

describe('App:reducers:rootReducer', () => {
  it('should be defined', () => {
    expect(rootReducer).toBeDefined()
  })

  it('we should have two keys (reducers) defined', () => {
    expect(combinedReducer).toBeDefined()
    expect(Object.keys(combinedReducer).length).toBe(2)
  })

  it('usersContainer should be defined', () => {
    expect(combinedReducer[SELECTOR_USERS]).toBeDefined()
  })

  it('counterContainer should be defined', () => {
    expect(combinedReducer[SELECTOR_COUNT]).toBeDefined()
  })
})
