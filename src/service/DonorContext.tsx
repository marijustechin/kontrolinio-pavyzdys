import { createContext, useContext } from 'react';
import { IDonor } from '../pages/DonorListPage';

export interface IDonorContext {
  donors: IDonor[];
  removeDonor: (id: string) => void;
  updateDonor: (id: string, donor: IDonor) => void;
}

export const DonorContext = createContext<IDonorContext | undefined>(undefined);

export const useDonorContext = () => {
  const donorState = useContext(DonorContext);

  if (!donorState)
    throw new Error('Komponentas turi buti DonorContext.Provider viduje');

  return donorState;
};
