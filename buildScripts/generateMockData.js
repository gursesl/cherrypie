import jsf from 'json-schema-faker'
import faker from 'faker'
import fs from 'fs'
import chalk from 'chalk'
import usersSchema from './mockSchemaUsers'
import citiesSchema from './mockSchemaCities'

jsf.extend('faker', () => faker)

const schemaJson = {
  users: jsf(usersSchema).users,
  searchByCityName: jsf(citiesSchema).searchByCityName,
  profile: { name: 'typicode' },
}

const json = JSON.stringify(schemaJson)

fs.writeFile('./src/utils/db.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err)) // eslint-disable-line no-console
  }

  console.log(chalk.green('Mock data generated.')) // eslint-disable-line no-console
  return 0
})
