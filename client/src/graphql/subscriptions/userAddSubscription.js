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

const userAddSubscription = gql`
  subscription userAdded($owner: ID!) {
    userAdded(owner: $owner) {
      id
      fullName
      email
    }
  }
`

export default userAddSubscription
