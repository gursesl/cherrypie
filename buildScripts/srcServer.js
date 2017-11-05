import http from 'http'
import chalk from 'chalk'
import appconfig from '../gqlserver/src/lib/config'
import db from '../gqlserver/src/lib/db'
import app from '../gqlserver/src/lib/app'

const PORT = process.env.PORT || 5000

// // MongoDB
db.connect(appconfig.dbUri)

// Express
const server = http.createServer(app)
server.listen(PORT, () => {
  console.log(chalk.green(`GraphQL server started on port ${PORT}`)) // eslint-disable-line no-console
})
