import axios, { AxiosError } from 'axios';

const baseInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export function setAuthToken(token: string) {
  if (token) {
    baseInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete baseInstance.defaults.headers.common['Authorization'];
  }
}

export default baseInstance