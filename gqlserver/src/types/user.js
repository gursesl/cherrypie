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
    owner: User!
  }

  type UserListResponse {
    ok: Boolean!
    users: [User!]
    errors: [Error!]
  }

  type Query {
    users: [User!]!
    getUsers: UserListResponse!
    getCurrentUser: User
    getUserById(id: Int!): User
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
    id: ID
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
    logoutUser: LoginResponse!
    deleteUser(id: ID!): User
  }
`
