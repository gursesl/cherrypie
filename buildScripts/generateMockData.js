import jsf from 'json-schema-faker';
import fs from 'fs';
import chalk from 'chalk';
import schema from './mockDataSchema';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err)); // eslint-disable-line no-console
  }

  console.log(chalk.green('Mock data generated.')); // eslint-disable-line no-console
  return 0
});
