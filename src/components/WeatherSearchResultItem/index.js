import React from 'react'
import PropTypes from 'prop-types'

const WeatherSearchResultItem = props => (
  <div>
    <p>{props.city.temp}</p>
  </div>
)

WeatherSearchResultItem.propTypes = {
  city: PropTypes.shape({
    // id: PropTypes.number.isRequired,
    name: PropTypes.string,
    // country: PropTypes.string,
    // coord: PropTypes.shape({
    //   lat: PropTypes.number,
    //   lon: PropTypes.number,
    // }),
    temp: PropTypes.string,
    // pressure: PropTypes.number,
    // humidity: PropTypes.number,
    // temp_min: PropTypes.string,
    // temp_max: PropTypes.string,
    // wind: PropTypes.number,
    // clouds: PropTypes.number,
    // description: PropTypes.string,
    // icon: PropTypes.string,
  }).isRequired,
}

export default WeatherSearchResultItem
