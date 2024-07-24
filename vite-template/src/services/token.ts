import axios from 'axios';
import { TokenResponse } from '../types/token-response';

/**
 *
 * This method allows you to get valid token when token is expired
 *
 * @param {*} apiUrl Is the API endpoint where is the document
 * @param {*} bodyEncrypted is the path to the document inside of Backend
 * @method refreshToken() principal method 
 * @method getToken() get token 
 * @method checkTokenValidity() check weather or no token is valid
 * @author Jazmin Rodriguez
 * 
 */
const API_URL = `${import.meta.env.VITE_URL}`;
const getToken = async (): Promise<void> => {
  try {
    const body = import.meta.env.VITE_BODY;
    const url = `${API_URL}auth/token`;
    const response = await axios.post<TokenResponse>(url, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { token, expires } = response.data;
    localStorage.setItem('accessToken', token);
    localStorage.setItem('expirationTime', expires);
  } catch (error) {
    console.error(error);
  }
};

const checkTokenValidity = (): boolean => {
  const token = localStorage.getItem('accessToken');
  const expirationTime = localStorage.getItem('expirationTime');

  if (!token || !expirationTime) {
    return false;
  }
  
  const currentTime = new Date().getTime();
  const expirationDate = new Date(expirationTime).getTime();
  if (currentTime > expirationDate) {
    return false;
  }
  return true;
};

export const refreshToken = async (): Promise<void> => {
  if (!checkTokenValidity()) {
    await getToken();
  }
};
