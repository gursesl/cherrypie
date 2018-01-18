import 'semantic-ui-css/semantic.min.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store'
import './index.css'
import App from './App'
import client from './apolloClient'
import registerServiceWorker from './registerServiceWorker'

const target = document.getElementById('root')

const body = (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </ApolloProvider>
)

render(body, target)
registerServiceWorker()
