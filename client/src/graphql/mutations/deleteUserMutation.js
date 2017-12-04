import gql from 'graphql-tag'

const deleteUserMutation = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`

export default deleteUserMutation
