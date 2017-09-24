'use strict'

const Sequelize = require('sequelize');
// const db = require('./index.js');

module.exports = function(sequelize, DataTypes) {
  const Lead = sequelize.define('Lead', {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_name: {
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
    contacted: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    converted: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    city: {
      type: Sequelize.STRING,
      allowNull: true
    },
    state: {
      type:Sequelize.STRING,
      allowNull: false
    },
    zip: {
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

  return Lead;
}
