import axios from 'axios';

const api = axios.create({
    baseURL: 'http://174.138.62.233:3334/',
});

export default api;