import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import chalk from 'chalk'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import { schema } from './src/schema'

const myGraphQlSchema = schema
const PORT = process.env.GRAPHQL_PORT || 4000
const server = express()
server.use('*', cors({ origin: '*' }))

server.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQlSchema }))
server.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }))

server.listen(PORT, () => {
  console.log(chalk.green(`GraphQL server is running on port ${PORT}`)) // eslint-disable-line no-console
})
