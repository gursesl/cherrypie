export default `
  type User {
    id: ID!
    userName: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
    address: String
    address2: String
    city: String
    state: String
    zip: String
    userType: String!
  }

  type Query {
    users: [User!]!
    getUsers: [User!]!
    getUser(id: Int!): User!
  }

  type Mutation {
    registerUser(userName: String!,
      password: String!,
      email: String!,
      firstName: String,
      lastName: String,
      address: String,
      address2: String,
      city: String,
      state: String,
      zip: String,
      userType: String!): User!
  }
`
