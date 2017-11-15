import React from 'react'
import { shallow } from 'enzyme'

// Apollo
import { ApolloLink, Observable, execute } from 'apollo-link'
import '../../../setupTests'
import { UsersGraphQL as PureUsersGraphQL } from '..'
import { typeDefs } from '../../../../gqlserver/src/schema'
import { users } from '../../../../gqlserver/src/resolvers/user'

class MockLink extends ApolloLink {
  constructor(data) {
    super()
    this.data = data
  }

  request() {
    return new Observable((observer) => {
      observer.next(this.data)
      observer.complete()
    })
  }
}

const link = new MockLink({
  users,
  loading: false,
})

const operation = { query: typeDefs }

describe('UserGraphQL component', () => {
  it('Should receive data', () => {
    // execute returns an Observable so it can be subscribed to
    /* eslint-disable no-console */
    execute(link, operation).subscribe({
      next: data => console.log(`received data ${JSON.stringify(data.users)}`),
      error: error => console.log(`received error ${error}`),
      complete: () => console.log('complete'),
    })
  })

  it('Should render loading state', () => {
    const cmp = <PureUsersGraphQL data={{ loading: true, error: null, users }} />
    expect(shallow(cmp)
      .find('Loader')
      .props().content).toBe('Loading')
    expect(cmp).toMatchSnapshot()
  })

  it('Should render error state', () => {
    const cmp = (
      <PureUsersGraphQL data={{ loading: false, error: { message: 'Error Message' }, users }} />
    )
    expect(shallow(cmp)
      .find('p')
      .text()).toBe('Error Message')
    expect(cmp).toMatchSnapshot()
  })

  it('Should render users correctly with data', () => {
    const cmp = <PureUsersGraphQL data={{ loading: false, error: null, getUsers: users }} />
    expect(shallow(cmp).find('Card').length).toBe(4)
    expect(cmp).toMatchSnapshot()
  })

  it('Should render users correctly without data', () => {
    const cmp = <PureUsersGraphQL data={{ loading: false, error: null, getUsers: [] }} />
    expect(shallow(cmp)
      .find('p')
      .text()).toBe('No users found.')
    expect(cmp).toMatchSnapshot()
  })
})
