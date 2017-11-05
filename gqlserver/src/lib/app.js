import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import request from 'request'
import webpack from 'webpack'
import path from 'path'
import dotenv from 'dotenv'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../../../webpack.config.dev'
import errorHandler from './errorHandler'
import { schema } from '../schema'
import models from '../models'

dotenv.config()

// const createAuth = require('./auth/ensure-auth')
const app = express()

const compiler = webpack(config)
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.static('./public'))
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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../../src/index.html'))
})

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@rmail.com',
    },
    {
      id: 2, firstName: 'Bob1', lastName: 'Smith2', email: 'bob1@rmail.com',
    },
    {
      id: 3, firstName: 'Bob2', lastName: 'Smith3', email: 'bob2@rmail.com',
    },
  ])
})

app.get('/cityWeather', (req, res) => {
  const qs = {
    APPID: process.env.OWM_API_KEY,
    q: req.query.q,
  }

  const url = 'https://api.openweathermap.org/data/2.5/forecast'

  request({ url, qs }, (err, response, body) => {
    if (err) {
      return
    }
    // console.log(`Get response: ${response.statusCode}`)
    res.send(body)
  })
})


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
