import axios from 'axios';

/**
 * Provides methods to communicate with server
 * Depends on axios.js
 * Singleton
 */
const API = {
  async getModels() {
    const res = await axios.get('/api/models');
    return res.data;
  },

  async getModel(id) {
    const res = await axios.get(`/api/models/${id}`);
    return res.data;
  }
};

export default API;
