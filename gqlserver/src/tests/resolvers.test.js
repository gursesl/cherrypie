import resolvers, { users } from '../resolvers'

describe('Resolvers', () => {
  it('should return data', () => {
    expect(resolvers.Query.users().length).toBe(4)
  })

  it('should behave...', () => {
    expect(users.length).toBe(4)
  })
})
