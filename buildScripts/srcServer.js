import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import cors from 'cors'
import dotenv from 'dotenv'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config.dev'

/* eslint-disable no-console */
const port = 5000
const app = express()
const compiler = webpack(config)

dotenv.config()
app.use(cors())

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
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

app.listen(process.env.PORT || port, (err) => {
  if (err) {
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})

