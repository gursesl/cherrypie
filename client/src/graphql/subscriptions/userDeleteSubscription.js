import gql from 'graphql-tag'

// const userAddSubscription = gql`
//   subscription($owner: ID) {
//     userAdded(owner: $owner) {
//       id
//       fullName
//       email
//     }
//   }
// `

const userDeleteSubscription = gql`
  subscription onUserDeleted {
    userDeleted {
      id
    }
  }
`

export default userDeleteSubscription
