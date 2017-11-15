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

  type RegisterResponse {
    ok: Boolean!
    user: User
    errors: [Error!]
  }

  type LoginResponse {
    ok: Boolean!
    token: String
    refreshToken: String
    errors: [Error!]
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
      userType: String!): RegisterResponse!
    loginUser(email: String!, password: String!): LoginResponse!
    deleteUser(id: ID!): User
  }
`
