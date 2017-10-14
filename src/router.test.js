import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppRouter from './router'
import './setupTests'

describe('AppRouter', () => {
  const component = shallow(<AppRouter />)

  it('should render without blowing up', () => {
    expect(component).toBeDefined()
  })

  it('should have proper type Router', () => {
    expect(component.type()).toBe(Router)
  })

  it('should have a predefined number of routes', () => {
    expect(component.children().children().length).toBe(3)
  })

  it('should have proper type Route', () => {
    expect(component.children().children().at(0).type()).toBe(Route)
  })
})
