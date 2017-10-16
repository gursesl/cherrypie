import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import * as a from './actions'
import * as s from './selectors'
import WeatherSearchBox from '../../components/WeatherSearchBox'
import WeatherSearchResultList from '../../components/WeatherSearchResultList'

class WeatherContainer extends Component {
  componentWillMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <h2>Weather in your city</h2>
        <WeatherSearchBox {...this.props} />
        <WeatherSearchResultList {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  [s.makeSelectZip(), s.makeSelectCity(), s.makeSelectResults(), s.makeSelectError()],
  (zip, city, results, error) => ({
    zip,
    city,
    results,
    error,
  })
)

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onFetchZip: a.zipFetchStart,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
