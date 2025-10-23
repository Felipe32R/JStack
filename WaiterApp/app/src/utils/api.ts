import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://192.168.2.109:3001',
});
