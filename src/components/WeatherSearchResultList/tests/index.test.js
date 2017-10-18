import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import '../../../setupTests'
import WeatherSearchResultList from '../'
import WeatherSearchResultItem from '../../WeatherSearchResultItem'
import * as m from '../../../containers/WeatherContainer/tests/mockdata'

const component = (
  <WeatherSearchResultList results={m.processedMockData} />
)

describe('WeatherSearchResultList:index', () => {
  const renderedComponent = shallow(component)

  beforeEach(() => {
    renderedComponent.setState({})
  })

  it('should not blow up', () => {
    expect(renderedComponent).toBeDefined()
  })

  it('should be a simple component, not container', () => {
    expect(renderedComponent.find(Provider).length).toBe(0)
  })

  it('should render child <WeatherSearchResultItem /> components', () => {
    expect(renderedComponent.find(WeatherSearchResultItem).length).toBe(1)
  });

  it('should match the snapshot', () => {
    const tree = renderedComponent.render()
    expect(tree).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    const tree = renderedComponent.find(WeatherSearchResultItem).at(0).render()
    expect(tree).toMatchSnapshot()
  })
})
