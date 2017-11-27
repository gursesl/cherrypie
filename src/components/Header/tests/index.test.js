// REFERENCE: COMPONENT TEST WITH REACT-ROUTER 4
import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
// Apollo client
import { ApolloProvider } from 'react-apollo'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import Immutable from 'immutable'
import configureStore from 'redux-mock-store'
import createHistory from 'history/createBrowserHistory'
import { Menu, MenuItem } from 'semantic-ui-react'
import client from '../../../apolloClient'
import '../../../setupTests'
import initialState from '../../../initialState'
import AppHeader from '../'

const middlewares = []
const mockStore = configureStore(middlewares)
const store = mockStore(Immutable.fromJS(initialState))
const history = createHistory()
const component = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppHeader />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
)

const props = {
  data: {
    loading: false,
    getCurrentUser: {
      id: 123,
      email: 'email@email.com',
      fullName: 'John Smith',
    },
  },
}

describe('AppHeader:index', () => {
  const shallowComponent = shallow(<AppHeader.WrappedComponent {...props} />)
  const deepComponent = mount(component)

  beforeEach(() => {})

  it('should render without blowing up', () => {
    expect(shallowComponent).toBeDefined()
  })

  it('should have the proper initial state', () => {
    expect(shallowComponent.instance().state).toEqual({ visible: false })
  })

  it('should render a Visibility element', () => {
    expect(deepComponent.find(Menu).length).toBe(1)
  })

  it('should have a predefined number of nested menu items', () => {
    expect(deepComponent.find(MenuItem).length).toBe(8)
  })

  it('should render a child <FixedMenu /> component', () => {
    expect(shallowComponent.find('FixedMenu').exists()).toBe(false)
  })

  it('renders itself into the DOM with the correct shallowComponent styles', () => {
    const wrapper = renderer.create(component)
    expect(wrapper).toMatchSnapshot()
  })

  // TODO: Implement scroll simulation and assert FixedMenu found
  it('should have FixedMenu visible if state visible parameter is set to true', () => {
    shallowComponent.instance().hideFixedMenu()
    expect(shallowComponent.instance().state.visible).toBeFalsy()
  })

  it('should have FixedMenu hidden if state visible parameter is set to false', () => {
    shallowComponent.instance().showFixedMenu()
    expect(shallowComponent.instance().state.visible).toBeTruthy()
  })
})
