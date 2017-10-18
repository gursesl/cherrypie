import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import {
  Header,
  Icon,
} from 'semantic-ui-react'
import styled from 'styled-components'
import * as a from './actions'
import * as s from './selectors'
import WeatherSearchBox from '../../components/WeatherSearchBox'
import WeatherSearchResultList from '../../components/WeatherSearchResultList'

const PushDownDiv = styled.div`
  padding: 40px 0
`
class WeatherContainer extends Component {
  componentWillMount() {
    // console.log(this.props);
  }

  render() {
    return (
      <div>
        <PushDownDiv className="ui container">
          <Header as="h2">
            <Icon name="sun" />
            <Header.Content>
              Weather in your city
            </Header.Content>
          </Header>
        </PushDownDiv>
        <WeatherSearchBox onSubmit={this.props.weatherDataFetchStart} {...this.props} />

        <PushDownDiv className="ui container">
          <WeatherSearchResultList results={this.props.results} {...this.props} />
        </PushDownDiv>
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
    weatherDataFetchStart: a.weatherDataFetchStart,
    weatherDataFetchSuccess: a.weatherDataFetchSuccess,
    weatherDataFetchFailure: a.weatherDataFetchFailure,
  }, dispatch)
}

WeatherContainer.propTypes = {
  weatherDataFetchStart: PropTypes.func.isRequired,
  results: ImmutablePropTypes.map.isRequired, // eslint-disable-line
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer)
