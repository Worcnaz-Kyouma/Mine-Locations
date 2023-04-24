const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./../../config/sequelize');

const World = sequelize.define('World', {
    pkIdWorld: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    nmWorld: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    cdSeed: {
        type: DataTypes.BIGINT,
    },

    ieDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }

    //createdAt and updatedAt by default
}, {
    tableName: 'Worlds'
    //Sequelize already make my tables in plural when create in db, but i like to make it myself!
});

module.exports = World;