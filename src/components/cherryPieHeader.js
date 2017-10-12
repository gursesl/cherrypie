/* eslint-disable no-unused-vars */
import React from 'react';
import { Header } from 'semantic-ui-react';


const CherryPieHeader = () =>
  (
    <div>
      <h1>Header</h1>
      <Header
        as="h2"
        content="Semantic UI Header"
        subheader="Manage your account settings from this page"
      />
    </div>
  )

export default CherryPieHeader;
