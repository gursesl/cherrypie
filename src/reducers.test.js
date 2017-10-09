import rootReducer, { combinedReducer } from './reducers'

describe('App:reducers:rootReducer', () => {
  it('should be defined', () => {
    expect(rootReducer).toBeDefined()
  })

  it('we should have two keys (reducers) defined', () => {
    expect(combinedReducer).toBeDefined()
    expect(Object.keys(combinedReducer).length).toBe(2)
  })

  it('we should have two keys (reducers) defined', () => {
    expect(combinedReducer.users).toBeDefined()
  })

  it('we should have two keys (reducers) defined', () => {
    expect(combinedReducer.value).toBeDefined()
  })
})
