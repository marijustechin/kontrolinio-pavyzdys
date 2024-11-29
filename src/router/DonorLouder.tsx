import axios from 'axios';
import { DONORS_URL } from '../helpers/constants';

export const DonorLoader = async () => {
  const res = await axios.get(DONORS_URL);

  if (res.status !== 200)
    throw new Error('Json-Server miega ar aš grybą pjaunu?');

  return res.data;
};

export const DonorHydrateCallback = () => {
  return <div>Čia turetu buti koks nors spineris...</div>;
};
