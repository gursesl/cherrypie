import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import styled from 'styled-components'
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
import { QUERY_POLL_INTERVAL as pollInterval } from '../../graphql/constants'
import query from '../../graphql/queries/usersListQuery'
import deleteUserMutation from '../../graphql/mutations/deleteUserMutation'

const PushDownDiv = styled.div`padding: 40px 0;`

export class UsersGraphQL extends Component {
  state = {
    confirmOpen: false,
    user: null,
  }

  confirmDeleteHandler = () => {
    client
      .mutate({
        mutation: deleteUserMutation,
        variables: {
          id: this.state.user.id,
        },
        refetchQueries: [{ query }],
      })
      .then((response) => {
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
      const { loading, error, getUsers } = this.props.data
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
      if (getUsers.errors) {
        return (
          <PushDownDiv className="ui container">
            <Container>
              {this.renderErrors(getUsers.errors)}
            </Container>
          </PushDownDiv>
        )
      }

      // Formatting errors
      if (!getUsers.ok) {
        return (
          <PushDownDiv className="ui container">
            <Container>
              <Message error header="Access message" list={_.map(getUsers.errors, 'message')} />
            </Container>
          </PushDownDiv>
        )
      }

      if (getUsers.users.length === 0) {
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
                {getUsers.users.map(user => (
                  <Card key={user.id}>
                    <Card.Content>
                      <Image floated="right" size="mini" src="/img/matthew.png" />
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
      return (
        <PushDownDiv className="ui container">
          <Container>
            <Message error header={{ error }} />
          </Container>
        </PushDownDiv>
      )
    }
  }
}

UsersGraphQL.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    getUsers: PropTypes.shape({
      ok: PropTypes.bool.isRequired,
      errors: PropTypes.array,
      users: PropTypes.array,
    }),
  }).isRequired,
}

const options = {
  options: {
    pollInterval,
    notifyOnNetworkStatusChange: true,
  },
}

export default graphql(query, options)(UsersGraphQL)
