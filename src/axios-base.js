import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://portfolio-3a40a-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;