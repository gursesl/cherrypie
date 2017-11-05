import dotenv from 'dotenv'

dotenv.config()

const config = {
  dbUri: process.env.DB_URL || 'mongodb://localhost:27017/cherrypie',
}

export default config
