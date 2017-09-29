/* eslint-disable no-unused-vars */
import React from 'react';
import CherryPieHeader from './cherryPieHeader';

export default class App extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
       <CherryPieHeader />
        <h1>Hello React!</h1>
      </div>);
  }
}
