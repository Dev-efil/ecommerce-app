import axios from 'axios';
 
export default axios.create({
    baseURL: 'http://localhost:3500/api/v1/',
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});