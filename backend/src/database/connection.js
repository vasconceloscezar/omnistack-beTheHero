//importa KNEX e configurações do DB
const knex = require('knex');
const configuration = require('../../knexfile');

//cria conexão e passa como config o development (arquivo knexfile)
const connection = knex(configuration.development);

module.exports = connection;