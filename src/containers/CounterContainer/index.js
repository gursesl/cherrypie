import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
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

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)
