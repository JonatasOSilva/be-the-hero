import axios from 'axios';

const api = axios.create({
    baseURL: 'https://bethehero.jonatasosilva.dev/api/',
});

export default api;
