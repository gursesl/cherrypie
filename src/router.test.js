import React from 'react'
import { shallow } from 'enzyme'
import { Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
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
    expect(component.children().children().children().length).toBe(4)
  })

  it('should have proper type Route', () => {
    expect(component.children().children().at(0).type()).toBe(Switch)
  })
})
