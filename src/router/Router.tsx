import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import RegistrationPage from '../pages/RegistrationPage';
import DonorListPage from '../pages/DonorListPage';
import { DonorHydrateCallback, DonorLoader } from './DonorLouder';

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="registracija" element={<RegistrationPage />} />
      <Route
        loader={DonorLoader}
        HydrateFallback={DonorHydrateCallback}
        path="donoru-sarasas"
        element={<DonorListPage />}
      />
    </Route>
  )
);

export const routerLinks = [
  { title: 'Pradžia', href: '/' },
  { title: 'Registracija', href: '/registracija' },
  { title: 'Donorai', href: '/donoru-sarasas' },
];
