/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CherryPieHeader from './cherryPieHeader';
import UserList from '../containers/userContainer';
import CounterContainer from '../containers/CounterContainer'

export default class App extends Component {
  componentDidMount() {
    // console.log('Component did mount!');
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Hello React!</h1>
        <UserList />
        <CherryPieHeader />
        <CounterContainer />
      </div>
    );
  }
}
