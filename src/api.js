import axios from 'axios'

const api = axios.create(
  {
    baseURL: 'https://api.github.com/',
    timeout: 30000
  }
)

export {api} 