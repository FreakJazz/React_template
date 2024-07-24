import axios from 'axios';
import { refreshToken } from "./token";
import { Dignidad, JurisdiccionDignidad, DataForm } from '../types/dignidad';

/**
 *
 * This method allows you to get process and typo process from the repository
 *
 * @param {*} apiUrl Is the API endpoint where is the process
 * @param {*} proceso number of process
 * @method getDignidad() is the method to get process type
 * @author Jazmin Rodriguez
 * 
 */

const API_URL = `${import.meta.env.VITE_URL}`;

export const getDignidad = async (codigoProcess: number): Promise<any> => {
  try {
    await refreshToken();
    const headers = {
        proceso: codigoProcess,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')?.replace(/"/g, '')}`,
    };
    const response = await axios.post<Dignidad>(`${API_URL}Dignidad/GetDignidadByProcess`, null, { headers });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return error;
  }
}

export const getDignidadJurisdiccionForm = async (current: JurisdiccionDignidad) => {
  try {
      await refreshToken();
      const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')?.replace(/"/g, '')}`,
      };
      const response = await axios.post<DataForm>(`${API_URL}Dignidad/GetDignidadJurisdiccionForm`, current, { headers });
      return response.data.data;
  } catch (error) {
      console.error('Error:', error);
      return error;
  }
}




