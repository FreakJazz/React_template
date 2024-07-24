import axios from 'axios';
import { refreshToken } from "./token";
import { Modules } from '../types/modules'

/**
 *
 * This method allows you to get process and typo process from the repository
 *
 * @param {*} apiUrl Is the API endpoint where is the process
 * @param {*} proceso number of process
 * @method getModules() is the method to get process type
 * @author Jazmin Rodriguez
 * 
 */

const API_URL = `${import.meta.env.VITE_URL}`;
export const getModules = async (): Promise<any> => {
  try {
    await refreshToken();

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')?.replace(/"/g, '')}`,
    };
    const response = await axios.post<Modules>(`${API_URL}Modulos/GetModulos`, null, { headers });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
  }
}
