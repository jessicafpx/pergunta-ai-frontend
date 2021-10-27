import axios from 'axios';

const api = axios.create({
  baseURL: 'http://perguntaai-env-1.eba-dfemfgsm.us-east-1.elasticbeanstalk.com/api/v1/',
});

export default api;
