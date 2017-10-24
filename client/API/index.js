const axios = require('axios');

/**
 * Provides methods to communicate with server
 * Depends on axios.js
 * Singleton
 */
const API = {
  getModels() {
    axios.get('/api/models')
  }
};

module.exports = API;