import axios from 'axios';
import https from 'https';

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

const api = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  }),
  baseURL: process.env.REACT_APP_API_URL,
  headers
});

export default api;
