import gql from 'graphql-tag'

const findUserByEmailQuery = gql`
  query findUserByEmail($email: String!) {
    findUserByEmail(email: $email) {
      id
    }
  }
`

export default findUserByEmailQuery
