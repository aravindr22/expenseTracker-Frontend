import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080/expenseTracker_war_exploded/'
});

export default instance;