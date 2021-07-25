import axios from 'axios';

const API_URL = 'https://bottletechrecipeapp.azurewebsites.net/api';

export const apiCreateRecipe = data =>
  axios.post(`${API_URL}/recipe`, data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
export const apiGetRecipe = () => axios.get(`${API_URL}/recipe`);
