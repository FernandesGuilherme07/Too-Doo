const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc2', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
