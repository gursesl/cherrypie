import chalk from 'chalk'
import { createServer } from 'http'
import { execute, subscribe } from 'graphql'
import { SubscriptionServer } from 'subscriptions-transport-ws'
import { schema } from './schema'
import appconfig from './lib/config'
import db from './lib/db'
import app from './lib/app'

const PORT = process.env.PORT || 5000

// // MongoDB
db.connect(appconfig.dbUri)

// Express
// const server = http.createServer(app)
// server.listen(PORT, () => {
//   console.log(chalk.green(`GraphQL server started on port ${PORT}`)) // eslint-disable-line no-console
// })

// Apollo Subscriptions
const server = createServer(app)
server.listen(PORT, () => {
  console.log(chalk.green(`GraphQL server started on port ${PORT}`)) // eslint-disable-line no-console

  // Set up the WebSocket for handling GraphQL subscriptions
  // eslint-disable-next-line

  // new SubscriptionServer(
  //   {
  //     execute,
  //     subscribe,
  //     schema,
  //     onConnect: (connectionParams, webSocket) => {
  //       console.log(chalk.green('WS connected.')) // eslint-disable-line no-console
  //     },
  //     onOperation: (message, params, webSocket) => {
  //       console.log(chalk.blue('WS operation.')) // eslint-disable-line no-console
  //       return {
  //         key: true,
  //       }
  //     },
  //     onOperationDone: (webSocket) => {
  //       console.log(chalk.blue('WS operation done.')) // eslint-disable-line no-console
  //     },
  //     onDisconnect: (webSocket) => {
  //       console.log(chalk.red('WS disconnected.')) // eslint-disable-line no-console
  //     },
  //   },
  //   {
  //     server,
  //     path: '/subscriptions',
  //   }
  // )

  // eslint-disable-next-line
  new SubscriptionServer(
    {
      execute,
      subscribe,
      schema,
    },
    {
      server,
      path: '/subscriptions',
    }
  )
})
