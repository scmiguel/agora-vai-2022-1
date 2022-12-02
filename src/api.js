import ky from 'ky'

const api = ky.extend({
    prefixUrl: 'https://agoravai-miguel.onrender.com/',
    credentials: 'include',
    timeout: 10000
})

export default api