import axios from 'axios';

export default function setup() {
  const http = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_URL,
    timeout: 3000,
  });

  return http;
}
