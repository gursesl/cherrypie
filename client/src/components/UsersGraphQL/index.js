import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'
import {
  Container,
  Card,
  Image,
  Button,
  Segment,
  Dimmer,
  Loader,
  Confirm,
  Message,
} from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import client from '../../apolloClient'
import usersListQuery from '../../graphql/queries/usersListQuery'
import deleteUserMutation from '../../graphql/mutations/deleteUserMutation'
import userAddSubscription from '../../graphql/subscriptions/userAddSubscription'
import userDeleteSubscription from '../../graphql/subscriptions/userDeleteSubscription'
import userAvatar from './matthew.png'

const PushDownDiv = styled.div`
  padding: 40px 0;
`

export class UsersGraphQL extends Component {
  constructor(props) {
    super(props)
    this.state = {
      confirmOpen: false,
      user: null,
    }

    // keep track of subscription handle to not subscribe twice.
    // we don't need to unsubscribe on unmount, because the subscription
    // gets stopped when the query stops.
    this.subscription = null
  }

  // componentWillMount() {
  //   console.log(JSON.stringify(this.props))
  //   this.props.data.subscribeToMore({
  //     document: userAddSubscription,
  //     variables: {
  //       owner: '5a0fca5babfda727ba81626d',
  //     },
  //     updateQuery: (prev, { subscriptionData }) => {
  //       console.log(`prev: ${JSON.stringify(prev)}`)
  //       console.log(`subscriptionData: ${JSON.stringify(subscriptionData)}`)

  //       if (!subscriptionData.data) {
  //         return prev
  //       }

  //       return {
  //         ...prev,
  //         getUsers: [...prev.getUsers.users, subscriptionData.userAdded],
  //       }
  //     },
  //   })
  // }

  // componentWillMount() {
  // Add Subscription
  // this.unsubscribe = this.subscribeAddUser(this.props.ownerId)
  // console.log(JSON.stringify(this.props.owner))
  // console.log(JSON.stringify(this.props.user.data.getCurrentUser.id))
  // Delete Subscription
  // this.props.data.subscribeToMore({
  //   document: userDeleteSubscription,
  //   variables: {},
  //   updateQuery: (prev, { subscriptionData }) => {
  //     console.log(`Delete:updateQuery:prev: ${JSON.stringify(prev)}`)
  //     console.log(`Delete:updateQuery:subscriptionData: ${JSON.stringify(subscriptionData)}`)
  //     if (!subscriptionData.data) {
  //       return prev
  //     }
  //     const reducedUsers = [...prev.getUsers]
  //     _.pullAllBy(reducedUsers, [{ id: subscriptionData.data.userDeleted.id }], 'id')
  //     console.log(`reducedUsers ${JSON.stringify(reducedUsers)}`)
  //     const ret = {
  //       ...prev,
  //       getUsers: reducedUsers,
  //     }
  //     // console.log(JSON.stringify(ret))
  //     return ret
  //   },
  // })
  // }

  componentWillReceiveProps(nextProps) {
    // we don't resubscribe on changed props, because it never happens in our app
    if (!this.subscription && !nextProps.loading) {
      // Add subscription
      this.subscription = this.props.subscribeToMore({
        document: userAddSubscription,
        variables: { owner: nextProps.owner },
        // variables: props => ({
        //   owner: props.owner,
        // }),
        updateQuery: (prev, { subscriptionData, variables }) => {
          // if it's our own mutation, we might get the subscription result
          // after the mutation result.
          console.log(`prev: ${JSON.stringify(prev)}`)
          console.log(`subscriptionData: ${JSON.stringify(subscriptionData)}`)
          console.log(`variables: ${JSON.stringify(variables)}`)

          if (prev && prev.getUsers) {
            if (!subscriptionData.data) {
              return prev
            }

            if (!_.isEmpty(prev)) {
              const ret = {
                ...prev,
                getUsers: [...prev.getUsers, subscriptionData.data.userAdded],
              }

              // console.log(JSON.stringify(ret))
              return ret
            }
          }
          return prev
        },
        onError: (error) => {
          console.log(`Erorr in subscribeToMore: ${error}`)
        },
      })

      // Delete subscription
      this.props.subscribeToMore({
        document: userDeleteSubscription,
        variables: {},
        updateQuery: (prev, { subscriptionData }) => {
          // console.log(`Delete:updateQuery:prev: ${JSON.stringify(prev)}`)
          // console.log(`Delete:updateQuery:subscriptionData: ${JSON.stringify(subscriptionData)}`)
          if (!subscriptionData.data) {
            return prev
          }
          const reducedUsers = [...prev.getUsers]
          _.pullAllBy(reducedUsers, [{ id: subscriptionData.data.userDeleted.id }], 'id')
          // console.log(`reducedUsers ${JSON.stringify(reducedUsers)}`)
          const ret = {
            ...prev,
            getUsers: reducedUsers,
          }
          // console.log(JSON.stringify(ret))
          return ret
        },
      })
    }
  }

  // componentWillReceiveProps({ ownerId }) {
  //   console.log(`componentWillReceiveProps:owner ${ownerId}`)
  //   if (this.props.ownerId !== ownerId) {
  //     console.log(`componentWillReceiveProps:owner ${this.props.ownerId !== ownerId}`)
  //     if (this.unsubscribe) {
  //       console.log(`componentWillReceiveProps:this.unsubscribe ${this.unsubscribe}`)
  //       this.unsubscribe()
  //     }
  //     this.unsubscribe = this.subscribeAddUser(ownerId)
  //   }
  // }

  // componentWillUnmount() {
  //   if (this.unsubscribe) {
  //     this.unsubscribe()
  //   }
  // }

  // subscribeAddUser = owner =>
  //   this.props.data.subscribeToMore({
  //     document: userAddSubscription,
  //     variables: (props) => {
  //       console.log('VariablesS!!!!!', props.ownerId)
  //       return { ownerId: props.ownerId, othervar: true }
  //     },
  //     // variables: {
  //     //   ownerId: 12341234234,
  //     // },
  //     updateQuery: (prev, { subscriptionData }) => {
  //       console.log('Subscribe AddUser!!!!!!')
  //       console.log(`prev: ${JSON.stringify(prev)}`)
  //       console.log(`subscriptionData: ${JSON.stringify(subscriptionData)}`)

  //       if (prev && prev.getUsers) {
  //         if (!subscriptionData.data) {
  //           return prev
  //         }

  //         if (!_.isEmpty(prev)) {
  //           const ret = {
  //             ...prev,
  //             getUsers: [...prev.getUsers, subscriptionData.data.userAdded],
  //           }

  //           // console.log(JSON.stringify(ret))
  //           return ret
  //         }
  //       }

  //       return prev
  //     },
  //   })

  confirmDeleteHandler = () => {
    client
      .mutate({
        mutation: deleteUserMutation,
        variables: {
          id: this.state.user.id,
        },
        // refetchQueries: [{ query }],
      })
      .then((response) => {
        // console.log(`confirmDeleteHandler: ${JSON.stringify(response)}`)
        if (response.data.deleteUser.id) {
          console.log(`${response.data.deleteUser.id} deleted successfully.`) //eslint-disable-line
          this.setState({
            confirmOpen: false,
            user: null,
          })
        }
      })
  }

  cancelDeleteHandler = () => {
    this.setState({
      confirmOpen: false,
      user: null,
    })
  }

  deleteUser = (user) => {
    this.setState({
      confirmOpen: true,
      user,
    })
  }

  renderErrors = errors =>
    errors.map(({ name, message }) => <Message error header={name} content={message} />)

  render() {
    try {
      const { loading, error, getUsers } = this.props
      if (loading) {
        return (
          <PushDownDiv className="ui container">
            <Container>
              <Segment>
                <Dimmer active>
                  <Loader content="Loading" />
                </Dimmer>
                <Image src="/img/short-paragraph.png" />
              </Segment>
            </Container>
          </PushDownDiv>
        )
      }

      // General errors
      if (error) {
        return (
          <PushDownDiv className="ui container">
            <Container>
              <Message error header="Authentication Error" content={error.message} />
            </Container>
          </PushDownDiv>
        )
      }

      // Data errors
      if (getUsers && getUsers.errors) {
        return (
          <PushDownDiv className="ui container">
            <Container>{this.renderErrors(getUsers.errors)}</Container>
          </PushDownDiv>
        )
      }

      // Formatting errors
      // if (!getUsers.ok) {
      //   return (
      //     <PushDownDiv className="ui container">
      //       <Container>
      //         <Message error header="Access message" list={_.map(getUsers.errors, 'message')} />
      //       </Container>
      //     </PushDownDiv>
      //   )
      // }

      if (getUsers.length === 0) {
        return (
          <PushDownDiv className="ui container">
            <Container>
              <Message color="red">No users found.</Message>
            </Container>
          </PushDownDiv>
        )
      }

      const promptUserContent = this.state.user ? this.state.user.fullName : 'this user'
      const promptContent = `Are you sure you want to delete ${promptUserContent}?`

      return (
        <div>
          <PushDownDiv className="ui container">
            <Confirm
              header="Confirm Delete"
              content={promptContent}
              open={this.state.confirmOpen}
              onConfirm={this.confirmDeleteHandler}
              onCancel={this.cancelDeleteHandler}
            />
            <Container>
              <Card.Group>
                {getUsers.map(user => (
                  <Card key={user.id}>
                    <Card.Content>
                      <Image floated="right" size="mini" src={userAvatar} />
                      <Card.Header>{user.fullName}</Card.Header>
                      <Card.Meta>{user.email}</Card.Meta>
                      <Card.Description>{user.address}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Edit
                        </Button>
                        <Button basic color="red" onClick={() => this.deleteUser(user)}>
                          Delete
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            </Container>
          </PushDownDiv>
        </div>
      )
    } catch (error) {
      console.log(error)
      return (
        <PushDownDiv className="ui container">
          <Container>
            <p>asdasdasdsd</p>
            <Message error header={{ error }} />
          </Container>
        </PushDownDiv>
      )
    }
  }
}

UsersGraphQL.propTypes = {
  loading: PropTypes.bool.isRequired,
  subscribeToMore: PropTypes.func.isRequired,
  getUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  })),
}

// UsersGraphQL.propTypes = {
//   loading: PropTypes.bool.isRequired,
//   currentUser: PropTypes.shape({
//     login: PropTypes.string,
//   }),
//   entry: PropTypes.shape({
//     id: PropTypes.number,
//     comments: PropTypes.arrayOf(
//       PropTypes.shape({
//         postedBy: PropTypes.shape({
//           login: PropTypes.string.isRequired,
//         }),
//         createdAt: PropTypes.number,
//         content: PropTypes.string.isRequired,
//       })
//     ),
//     repository: PropTypes.shape({
//       full_name: PropTypes.string,
//       html_url: PropTypes.string,
//     }),
//   }),
//   submit: PropTypes.func.isRequired,
//   subscribeToMore: PropTypes.func,
// };

// const options = {
//   pollInterval,
//   notifyOnNetworkStatusChange: true,
//   variables: {},
// }

// export default graphql(query, {
//   options: props => ({ variables: { owner: props.owner } }),
// })(UsersGraphQL)

const withData = graphql(usersListQuery, {
  options: props => ({ variables: { owner: props.owner, mainVar: true } }),
  props: ({
    data: {
      loading, currentUser, entry, subscribeToMore, getUsers,
    },
  }) => ({
    loading,
    currentUser,
    entry,
    subscribeToMore,
    getUsers,
  }),
})

export default withData(UsersGraphQL)

// export default graphql(USERS_QUERY, {
//   variables: props => ({
//     ownerId: props.owner,
//   }),
//   options: {
//     fetchPolicy: 'network-only',
//   },
// })(UsersGraphQL)
