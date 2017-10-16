import rootReducer, { reducers } from './reducers'
import { SELECTOR_COUNT } from './containers/CounterContainer/constants'
import { SELECTOR_USERS } from './containers/UserListContainer/constants'

describe('App:reducers:rootReducer', () => {
  it('should be defined', () => {
    expect(rootReducer).toBeDefined()
  })

  it('we should have two keys (reducers) defined', () => {
    expect(reducers).toBeDefined()
    expect(Object.keys(reducers).length).toBe(3)
  })

  it('usersContainer should be defined', () => {
    expect(reducers[SELECTOR_USERS]).toBeDefined()
  })

  it('counterContainer should be defined', () => {
    expect(reducers[SELECTOR_COUNT]).toBeDefined()
  })
})
