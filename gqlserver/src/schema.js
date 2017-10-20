import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

const typeDefs = `
  type User {
    id: ID!
    userName: String!
    password: String!
    email: String!
    firstName: String
    lastName: String
    address: String
    address2: String
    city: String
    state: String
    zip: String
    userType: String!
  }

  type Query {
    users: [User]
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
// addMockFunctionsToSchema({ schema })

export { schema }
