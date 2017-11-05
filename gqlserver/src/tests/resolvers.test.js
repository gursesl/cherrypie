import path from 'path'
import { fileLoader, mergeResolvers } from 'merge-graphql-schemas'
import { users } from '../resolvers/userResolvers'

const resolversArray = fileLoader(path.join(__dirname, '../resolvers'), { extensions: ['.js'] });
const resolvers = mergeResolvers(resolversArray)

describe('Resolvers', () => {
  it('should return data', () => {
    expect(resolvers.Query.users().length).toBe(4)
  })

  it('should return data', () => {
    expect(resolvers.Query.getUsers).toBeDefined()
  })

  it('should check mock data', () => {
    expect(users.length).toBe(4)
  })
})
