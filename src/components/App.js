/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import CherryPieHeader from './cherryPieHeader';
import UserList from '../containers/userContainer';

export default class App extends Component {
  componentDidMount() {
    // console.log('Component did mount!');
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <UserList />
        <CherryPieHeader />
        <h1>Hello React!</h1>
      </div>
    );
  }
}
