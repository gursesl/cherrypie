import gql from 'graphql-tag'

const registerMutation = gql`
  mutation registerUser(
    $password: String!
    $fullName: String!
    $email: String!
    $address: String
    $address2: String
    $city: String
    $state: String
    $zip: String
    $userType: String!
  ) {
    registerUser(
      password: $password
      fullName: $fullName
      email: $email
      address: $address
      address2: $address2
      city: $city
      state: $state
      zip: $zip
      userType: $userType
    ) {
      id
    }
  }
`

export default registerMutation
