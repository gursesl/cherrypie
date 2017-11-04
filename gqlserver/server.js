import chalk from 'chalk'
import http from 'http'
import config from './src/lib/config'
import app from './src/lib/app'
import db from './src/lib/db'

const PORT = process.env.GRAPHQL_PORT || 4000

// MongoDB
db.connect(config.dbUri)

// Express
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(chalk.green(`GraphQL server started on port ${PORT}`)) // eslint-disable-line no-console
})
