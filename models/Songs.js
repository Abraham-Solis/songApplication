const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Songs extends Model { }

Songs.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'Songs' })

module.exports = Songs