import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:5000/' // url donde se corre la api
});

export default api;