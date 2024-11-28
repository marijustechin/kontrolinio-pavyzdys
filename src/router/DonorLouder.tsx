import axios from 'axios';

export const DonorLoader = async () => {
  const res = await axios.get('http://localhost:8888/donors');

  if (res.status !== 200)
    throw new Error('Json-Server miega ar aš grybą pjaunu?');

  return res.data;
};

export const DonorHydrateCallback = () => {
  return <div>Čia turetu buti koks nors spineris...</div>;
};
