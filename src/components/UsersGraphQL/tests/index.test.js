/* eslint-disable no-unused-vars */
import React from 'react'
import { fromJS } from 'immutable'
import { shallow, mount } from 'enzyme'
// import ApolloClient, { ApolloProvider } from 'react-apollo'
// import gql from 'graphql-tag'
// import { mockServer, makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
// import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils'
// import configureStore from 'redux-mock-store'
// import '../../../setupTests'
// import UsersGraphQL, { usersListQuery } from '..'
// import { typeDefs } from '../../../../gqlserver/src/schema'

// const middlewares = []
// const mockStore = configureStore(middlewares)
// const store = mockStore(fromJS({}))

// const myMockServer = mockServer(typeDefs)
// myMockServer.query(usersListQuery)


// const typeDefs = `
//   type User {
//     id: Int
//     name: String
//     email: String
//   }

//   type Query {
//     user: User
//   }
// `

// const schema = makeExecutableSchema({ typeDefs })
// addMockFunctionsToSchema({ schema })

// const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema })

// const client = new ApolloClient({
//   networkInterface: mockNetworkInterface,
// })

// client.query({
//   query: gql`{ user { id
//     name
//     email } }`,
// })

// const component = (
//   <ApolloProvider store={store} client={client}>
//     <UsersGraphQL />
//   </ApolloProvider>
// )

describe('UserGraphQL component', () => {
  it('Should render correctly', () => {
    // console.log(mount(component))
    // console.log(mount(component).instance().props)
    // console.log(mount(component).instance().props.client.store.getState().apollo.data)
  })
})
