/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import { Router, Route, Switch } from 'react-router'
import createHistory from 'history/createBrowserHistory'
// Apollo client
import { ApolloProvider } from 'react-apollo'
import client from '../apolloClient'
import '../setupTests'
import initialState from '../initialState'
import App from './App'
import AppHeader from './Header'
import Footer from './Footer'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(Immutable.fromJS(initialState))
const history = createHistory()
const containerDom = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App>
          <div>Children</div>
        </App>
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
)

describe('App:index', () => {
  const container = mount(containerDom)

  beforeEach(() => {
  })

  it('should render without blowing up', () => {
    expect(container).toBeDefined();
  })

  // TODO: Fix this by using a mock local forage method.
  // Ref: https://stackoverflow.com/questions/40952566/how-to-test-async-storage-with-jest
  xit('should have the proper initial state', () => {
    expect(container.instance().store.getState()).toEqual(initialState)
  })

  it('should render a header', () => {
    expect(container.find(AppHeader).length).toBe(1)
  });

  it('should render a footer', () => {
    expect(container.find(Footer).length).toBe(1)
  });
})
