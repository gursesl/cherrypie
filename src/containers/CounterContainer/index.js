/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter, NavLink } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { createSelector } from 'reselect'
import * as a from './actions'
import { makeSelectValue } from './selectors'
import Counter from '../../components/Counter'

class CounterContainer extends PureComponent {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/users">Users</NavLink>
        <Counter {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  makeSelectValue(),
  value => ({ value }),
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onIncrement: a.incrementAction,
    onDecrement: a.decrementAction,
    onIncrementAsync: a.incrementActionAsync,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CounterContainer))
