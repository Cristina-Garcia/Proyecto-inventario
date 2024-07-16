import axios from 'axios'

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
})
