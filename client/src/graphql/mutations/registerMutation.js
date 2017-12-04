import gql from 'graphql-tag'

const registerMutation = gql`
  mutation registerUser(
    $email: String!
    $password: String!
    $fullName: String!
    $address: String
    $address2: String
    $city: String
    $state: String
    $zip: String
    $userType: String!
  ) {
    registerUser(
      email: $email
      password: $password
      fullName: $fullName
      address: $address
      address2: $address2
      city: $city
      state: $state
      zip: $zip
      userType: $userType
    ) {
      user {
        id
      }
      errors {
        message
        path
      }
    }
  }
`

export default registerMutation
