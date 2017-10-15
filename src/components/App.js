import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import AppHeader from './Header'
import Footer from './Footer'

class App extends Component {
  componentDidMount() {
    // console.log('Component did mount!');
  }

  render() {
    return (
      <div>
        <AppHeader />
        <div className="ui">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
}

export default withRouter(App)
