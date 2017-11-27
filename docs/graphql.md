// Get users
query {
  getUsers {
    ok
    users{
      id
      fullName
      email
    }
    errors {
      path
      message
    }
  }
}

// Login user
mutation {
  ç(email: "levent@movel.co", password: "password") {
    ok,
    errors {
      message
    },
    token,
    refreshToken
  }
}

mutation ($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
  ok
  errors {
    path
    message
  }
  token
  refreshToken
  }
}


// Register user
mutation {
  registerUser(
    password: "awwwww",
    fullName: "Miwwww",
    address: "123 Maple Ave",
    address2: "Unit 302",
    email: "maiwl@gmail.com",
    city: "Chicago",
    state: "IL",
    zip: "23223-2312",
    userType: "provider"
  )
 {
	user {
    id
  }
  errors {
    message
    path
  }
  }
}

// Delete user
mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
  }
}
