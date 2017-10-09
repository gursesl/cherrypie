/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as a from './actions'
import selectCounterContainer from './selectors'
import Counter from '../../components/Counter'

class CounterContainer extends Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.toJS().value,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onIncrement: a.incrementAction,
    onDecrement: a.decrementAction,
    onIncrementAsync: a.incrementActionAsync,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
