import axios from 'axios'

const api = axios.create({
    // Precisa terminar com /
    baseURL: 'https://agoravai-miguel.onrender.com/',
    timeout: 5000,
    headers: {'x-access-token': window.sessionStorange.getItem('app-data')}
})

export default api