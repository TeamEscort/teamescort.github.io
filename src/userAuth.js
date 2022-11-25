import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.109.49.42/api',
})

export default axiosInstance;
