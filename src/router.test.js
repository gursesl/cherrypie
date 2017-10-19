import React from 'react'
import { shallow } from 'enzyme'
import { Switch } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import CounterContainer from './containers/CounterContainer'
import UserListContainer from './containers/UserListContainer'
import WeatherContainer from './containers/WeatherContainer'
import Home from './components/Home'
import AppRouter from './router'
import './setupTests'

describe('AppRouter', () => {
  const component = shallow(<AppRouter />)

  const routes = [
    {
      component: Home,
      route: '/',
    },
    {
      component: CounterContainer,
      route: '/counter',
    },
    {
      component: UserListContainer,
      route: '/users',
    },
    {
      component: WeatherContainer,
      route: '/weather',
    },
  ]

  it('should render without blowing up', () => {
    expect(component).toBeDefined()
  })

  it('should have proper type Router', () => {
    expect(component.type()).toBe(Router)
  })

  it('should have routes defined', () => {
    routes.forEach((route) => {
      const rtc = component.findWhere(n => n.prop('component') === route.component)
      expect(rtc.length).toBe(1)
      expect(rtc.prop('path')).toBe(route.route)
    });
  })

  it('should have proper type Route', () => {
    expect(component.children().children().at(0).type()).toBe(Switch)
  })
})
