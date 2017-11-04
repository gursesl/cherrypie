import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import errorHandler from './errorHandler'
import { schema } from '../schema'
import models from '../models'

// const createAuth = require('./auth/ensure-auth')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
// app.use(express.static('./public'))
// const ensureAuth = createAuth()

app.use('*', cors({ origin: '*' }))
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    models,
  },
}))
app.use('/graphiql', bodyParser.json(), graphiqlExpress({ endpointURL: '/graphql' }))

// const auth = require('./routes/auth')
// const pets = require('./routes/pets')
// const stores = require('./routes/stores')
// const toys = require('./routes/toys')
// const vaccines = require('./routes/vaccines')
// const me = require('./routes/me')

// app.use('/api/auth', auth)
// app.use('/api/me', ensureAuth, me)
// app.use('/api/pets', ensureAuth, pets)
// app.use('/api/stores', ensureAuth, stores)
// app.use('/api/toys', ensureAuth, toys)
// app.use('/api/vaccines', ensureAuth, vaccines)

app.use(errorHandler())

export default app
