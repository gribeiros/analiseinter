
const Sequelize = require("sequelize");
const dbConfig = require("./config/config");

const Lists = require('../database/models/Lists');
const Person = require('../database/models/Person');
const Results = require('../database/models/Results');
const User = require('../database/models/User');

const connection = new Sequelize(dbConfig);

try {
  connection.authenticate();
} catch (error) {
  console.error('\nUnable to connect to the database:', error);
}

Lists.init(connection);
Person.init(connection);
Results.init(connection);
User.init(connection);

Lists.associate(connection.models);
Person.associate(connection.models);
Results.associate(connection.models);
User.associate(connection.models);

module.exports = connection;