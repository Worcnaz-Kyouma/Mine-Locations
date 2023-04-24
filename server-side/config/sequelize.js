//Importing class Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mine_locations', 'root', 'pradopgworcnaz0', {
    host: 'localhost',
    port: 3307,
    dialect: 'mysql'
});

module.exports = sequelize;