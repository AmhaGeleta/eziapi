import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://ezilapi.herokuapp.com/api/',
});
