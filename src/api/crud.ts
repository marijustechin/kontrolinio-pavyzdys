import axios from 'axios';
import { IDonor } from '../pages/DonorListPage';
import { IFormValues } from '../components/EditModal';

export const BASE_URL = 'http://localhost:7777';
export const DONORS_URL = BASE_URL + '/donors';

export const getAll = async () => {
  try {
    const res = await axios.get<IDonor[] | string>(DONORS_URL);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.message === 'Network Error') {
        return 'Nepavyko gauti duomenų: json-serveris neatsako - arba jis neveikia, arba neteisingas prievadas';
      }
    }
    return 'Įvyko nenumatyta klaida';
  }
};

export const getById = async (id: string) => {
  try {
    const res = await axios.get<IDonor | string>(`${DONORS_URL}/${id}`);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      if (error.message === 'Network Error') {
        return 'Nepavyko gauti duomenų: json-serveris neatsako - arba jis neveikia, arba neteisingas prievadas';
      } else if (error.message === 'Request failed with status code 404')
        return 'Tokio ID nepavyko rasti';
    }
    return 'Įvyko nenumatyta klaida';
  }
};

export const deleteById = async (id: string) => {
  try {
    const res = await axios.delete<IDonor | string>(`${DONORS_URL}/${id}`);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      if (error.message === 'Network Error') {
        return 'Nepavyko gauti duomenų: json-serveris neatsako - arba jis neveikia, arba neteisingas prievadas';
      }
    }
    return 'Įvyko nenumatyta klaida';
  }
};

export const updateDonor = async (id: string, donor: IFormValues) => {
  try {
    const res = await axios.put<IDonor | string>(`${DONORS_URL}/${id}`, donor);
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.log(error);
      if (error.message === 'Network Error') {
        return 'Nepavyko gauti duomenų: json-serveris neatsako - arba jis neveikia, arba neteisingas prievadas';
      }
    }
    return 'Įvyko nenumatyta klaida';
  }
};
