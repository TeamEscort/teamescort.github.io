import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.109.62.222/api',
})

export default axiosInstance;
