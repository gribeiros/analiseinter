
const Sequelize = require("sequelize");
const dbConfig = require("./config/config");

//Lists
const Mm1 = require('../database/models/Mm1')
const Mmmoneb = require('../database/models/Mmmoneb')
const Mm1k = require('../database/models/Mm1k')
const Mminfinito = require('../database/models/Mminfinito')
const Mminfinitok = require('../database/models/Mminfinitok')
const Mmm = require('../database/models/Mmm')
const Mmmb = require('../database/models/Mmmb')


const Results = require('../database/models/Results');
const User = require('../database/models/User');

const connection = new Sequelize(dbConfig);

try {
  connection.authenticate();
} catch (error) {
  console.error('\nUnable to connect to the database:', error);
}

/*Init Models*/

Mm1.init(connection);
Mmmoneb.init(connection);
Mm1k.init(connection);
Mminfinito.init(connection);
Mminfinitok.init(connection);
Mmm.init(connection);
Mmmb.init(connection);
Results.init(connection);
User.init(connection);

/*Init Associates*/

Mm1.associate(connection.models);
Mmmoneb.associate(connection.models);
Mm1k.associate(connection.models);
Mminfinito.associate(connection.models);
Mminfinitok.associate(connection.models);
Mmm.associate(connection.models);
Mmmb.associate(connection.models);
Results.associate(connection.models);
User.associate(connection.models);

module.exports = connection;