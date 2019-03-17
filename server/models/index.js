const Sequelize = require('sequelize');

const { db } = require('../config');
const scenarios = require('./scenarios');

const sequelize = new Sequelize(`${db.dialect}://${db.login}:${db.pass}@${db.host}:${db.port}/${db.name}`, {
  logging: false
});

const users = sequelize.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false,
  indexes: [{ unique: true, fields: ['name'] }]
});

const roles = sequelize.define('role', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

users.belongsTo(roles);

module.exports = {
  db: sequelize,
  scenarios,
  users,
  roles
};
