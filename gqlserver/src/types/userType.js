export default `
  type User {
    id: ID!
    email: String!
    password: String!
    fullName: String!
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
    getUser(id: Int!): User
    findUserByEmail(email: String!): User
  }

  type Mutation {
    registerUser(
      email: String!,
      password: String!,
      fullName: String,
      address: String,
      address2: String,
      city: String,
      state: String,
      zip: String,
      userType: String!): User
    deleteUser(id: ID!): User
  }
`
