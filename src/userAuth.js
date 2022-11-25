import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://3.111.166.230/api',
})

export default axiosInstance;
