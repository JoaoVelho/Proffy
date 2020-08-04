import knex from 'knex';

require('dotenv').config();

const db = knex({
  client: 'pg',
  connection: `${process.env.PG_CONNECTION_STRING}`,
});

export default db;
