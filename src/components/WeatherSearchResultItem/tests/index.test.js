import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import '../../../setupTests'
import WeatherSearchResultItem from '../'
import * as m from '../../../containers/WeatherContainer/tests/mockdata'

const component = (
  <WeatherSearchResultItem city={m.processedMockData.toJS().list[0]} />
)

describe('WeatherSearchResultItem:index', () => {
  const renderedComponent = shallow(component)

  beforeEach(() => {
    // renderedComponent.setState({})
  })

  it('should not blow up', () => {
    expect(renderedComponent).toBeDefined()
  })

  it('should be a simple component, not container', () => {
    expect(renderedComponent.find(Provider).length).toBe(0)
  })

  it('should render a child <p /> component', () => {
    expect(renderedComponent.find('p').length).toBe(1)
  });

  it('should match the snapshot', () => {
    const tree = renderedComponent.render()
    expect(tree).toMatchSnapshot()
  })
})
