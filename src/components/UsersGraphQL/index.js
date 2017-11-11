import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container, Card, Image, Button, Segment, Dimmer, Loader } from 'semantic-ui-react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const PushDownDiv = styled.div`
  padding: 40px 0
`
export const UsersGraphQL = ({ data: { loading, error, getUsers } }) => {
  // console.log(`loading: ${loading} error: ${error} users: ${users}`)
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

  if (error) {
    return (
      <p>{error.message}</p>
    )
  }

  if (getUsers.length === 0) {
    return (
      <p>No users found.</p>
    )
  }

  return (
    <PushDownDiv className="ui container">
      <Container>
        <Card.Group>
          {getUsers.map(user =>
            (
              <Card key={user.id}>
                <Card.Content>
                  <Image floated="right" size="mini" src="/img/matthew.png" />
                  <Card.Header>
                    {user.fullName}
                  </Card.Header>
                  <Card.Meta>
                    {user.email}
                  </Card.Meta>
                  <Card.Description>
                    {user.address}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className="ui two buttons">
                    <Button basic color="green">Follow</Button>
                    <Button basic color="red">Block</Button>
                  </div>
                </Card.Content>
              </Card>))
        }
        </Card.Group>
      </Container>
    </PushDownDiv>
  )
}

export const usersListQuery = gql`
  query {
    getUsers {
      id
      email
      password
      fullName
      address
      userType
    }
  }
`

UsersGraphQL.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    getUsers: PropTypes.array,
  }).isRequired,
}

export default graphql(usersListQuery)(UsersGraphQL)
// export default UsersGraphQL
