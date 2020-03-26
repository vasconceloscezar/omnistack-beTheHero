import axios from 'axios';

const api = axios.create({
  baseURL: 'http://179.124.177.8:3333',
});

export default api;