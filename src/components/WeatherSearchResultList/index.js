import React, { Component } from 'react'
import ImmutablePropTypes from 'react-immutable-proptypes'
import WeatherSearchResultItem from '../WeatherSearchResultItem'

class WeatherSearchResultList extends Component {
  renderItems() {
    const items = this.props.results.toJS()
    if (items && items.list && items.list.length > 0) {
      return items.list.map(item => (
        <li key={item.dt}>
          <WeatherSearchResultItem
            name={items.name}
            city={item}
          />
        </li>))
    }
    return (
      <p>No items</p>
    )
  }

  render() {
    return (
      <div>
        <h2>WeatherSearchResultList</h2>
        <h3>{this.props.results.toJS().name}</h3>
        <ul>{this.renderItems()}</ul>
      </div>
    )
  }
}

WeatherSearchResultList.propTypes = {
  results: ImmutablePropTypes.map.isRequired, // eslint-disable-line
}

export default WeatherSearchResultList
