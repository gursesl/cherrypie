// Register user
mutation {
  registerUser(
    userName: “genral”,
    password: “asdasd”,
    fullName: “Milayla Hirschorn Jr.“,
    email: “mail@gmail.com”,
    address: “123 Maple Ave”,
    address2: “Unit 302”,
    city: “Chicago”,
    state: “IL”,
    zip: “23223-2312",
    userType: “provider”
  )
 {
    id
  }
}

// Delete user
mutation deleteUser($id: ID!) {
  deleteUser(id: $id) {
    id
  }
}
