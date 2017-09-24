'use strict'

const Sequelize = require('sequelize');
// const db = require('./index.js');

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    user_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    salt: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    state: {
      type:Sequelize.STRING,
      allowNull: false
    },
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    createdAt: { 
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW 
    },
    updatedAt: { 
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.NOW 
    }
  });
  return User;
}