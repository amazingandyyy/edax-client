import axios from 'axios';
const ROOT_URL = 'http://localhost:8000';

axios.defaults.baseURL = ROOT_URL;
if (localStorage.getItem('token')) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
}
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default axios;