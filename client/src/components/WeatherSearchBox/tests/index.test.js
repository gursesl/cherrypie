import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import {
  Form,
} from 'semantic-ui-react'
import '../../../setupTests'
import WeatherSearchBox from '../'

const onSubmitSpy = jest.fn()
const component = (
  <WeatherSearchBox zip="20165" city="Sterling" onSubmit={onSubmitSpy} />
)

describe('WeatherSearchBox:index', () => {
  const renderedComponent = shallow(component)
  const onChangeSpy = jest.fn(renderedComponent.instance().handleChange)

  beforeEach(() => {
    renderedComponent.setState({})
  })

  it('should not blow up', () => {
    expect(renderedComponent).toBeDefined()
  })

  it('should be a simple component, not container', () => {
    expect(renderedComponent.find(Provider).length).toBe(0)
  })

  it('should render a child <Form /> component', () => {
    expect(renderedComponent.find(Form).length).toBe(1)
  });

  it('should match the snapshot', () => {
    const tree = renderedComponent.render()
    expect(tree).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    const tree = renderedComponent.find(Form).render()
    expect(tree).toMatchSnapshot()
  })

  it('should have a working handleChange function', () => {
    renderedComponent.find('input').simulate('change', { target: { value: 'Pittsburgh' } })
    expect(renderedComponent.state().search).toBe('Pittsburgh')
  })

  it('should have a working handleChange function', () => {
    onChangeSpy({ target: { value: 'Sterling' } })
    expect(renderedComponent.state().search).toBe('Sterling')
    renderedComponent.find('input').simulate('change', { target: { value: 'New Jersey' } })
    expect(renderedComponent.state().search).toBe('New Jersey')
    expect(onChangeSpy).toHaveBeenCalled()
  })

  it('should have a working handleSubmit function', () => {
    renderedComponent.find(Form).simulate('submit')
    expect(onSubmitSpy).toHaveBeenCalled()
  })

  it('should have proper state when city prop not provided', () => {
    const c = (
      <WeatherSearchBox zip="20165" city="" onSubmit={onSubmitSpy} />
    )
    const rc = shallow(c)
    expect(rc.instance().state.search).toBe('20165')
  })

  it('should have proper state when zip prop not provided', () => {
    const c = (
      <WeatherSearchBox zip="" city="Singapor" onSubmit={onSubmitSpy} />
    )
    const rc = shallow(c)
    expect(rc.instance().state.search).toBe('Singapor')
  })
})
