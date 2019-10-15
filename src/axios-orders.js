import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-fa46e.firebaseio.com'
});

export default instance;