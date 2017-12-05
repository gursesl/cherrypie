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
    owner: ID!
  }

  type UserListResponse {
    ok: Boolean!
    owner: ID!
    users: [User!]
    errors: [Error!]
  }

  type Subscription {
    userAdded(owner: ID!): User
    userDeleted: User
  }

  type Query {
    users: [User!]!
    getUsers(owner: ID!): [User!]
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
    fullName: String
    email: String
    owner: ID
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
