import mongoose from 'mongoose'
import chalk from 'chalk'

mongoose.Promise = Promise

const connect = (dbUri) => {
  const promise = mongoose.connect(dbUri, {
    useMongoClient: true,
  }).then(() => mongoose.connection)

  // CONNECTION EVENTS
  // When successfully connected
  mongoose.connection.on('connected', () => {
    console.log(chalk.green(`Connected to MongoDB at ${dbUri}`)) // eslint-disable-line no-console
  })

  // If the connection throws an error
  mongoose.connection.on('error', (err) => {
    console.log(chalk.red(`Mongoose default connection error: ${err}`)) // eslint-disable-line no-console
  })

  // When disconnected
  mongoose.connection.on('disconnected', () => {
    console.log(chalk.yellow(`Mongoose disconnected from MondgoDB at: ${dbUri}`)) // eslint-disable-line no-console
  })

  // If the Node process ends, close the Mongoose connection
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log(chalk.red('Mongoose default connection disconnected through app termination')) // eslint-disable-line no-console
      process.exit(0)
    })
  })

  return promise
}

const disconnect = () => {
  mongoose.disconnect((err) => {
    console.log(chalk.red(`Mongoose disconnect error ${err}`)) // eslint-disable-line no-console
  })
}

export default { connect, disconnect }
