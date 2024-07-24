import axios from 'axios';
import { refreshToken } from "./token";
import { Process } from '../types/process'

/**
 *
 * This method allows you to get process and typo process from the repository
 *
 * @param {*} apiUrl Is the API endpoint where is the process
 * @param {*} proceso number of process
 * @method getProcess() is the method to get process type
 * @author Jazmin Rodriguez
 * 
 */

const API_URL = `${import.meta.env.VITE_URL}`;

export const getProcess = async (): Promise<any> => {
  try {
    await refreshToken();
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('accessToken')?.replace(/"/g, '')}`,
    };
    const response = await axios.post<Process>(`${API_URL}Procesos/GetProcesos`, null, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}
