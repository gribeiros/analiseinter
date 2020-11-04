
const Sequelize = require("sequelize");
const dbConfig = require("./config/config");

const Results = require('../database/models/Results');
const User = require('../database/models/User');

const connection = new Sequelize(dbConfig);

try {
  connection.authenticate();
} catch (error) {
  console.error('\nUnable to connect to the database:', error);
}

Results.init(connection);
User.init(connection);

Results.associate(connection.models);
User.associate(connection.models);

module.exports = connection;