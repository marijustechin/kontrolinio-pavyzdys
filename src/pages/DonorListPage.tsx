import { useLoaderData } from "react-router-dom";
import image from "/donorai-herojai.png";
import { DonorCard } from "../components/DonorCard";
import { DonorContext } from "../service/DonorContext";
import { useState } from "react";

export interface IDonor {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  bloodGroup: string;
  id: string;
}

const DonorListPage = () => {
  const donors = useLoaderData() as IDonor[];

  const [donorState, setDonorState] = useState({
    donors: donors,
    removeDonor: (id: string) =>
      setDonorState({
        ...donorState,
        donors: [...donors.filter((donor) => donor.id !== id)],
      }),
    updateDonor: (id: string, donor: IDonor) => {},
  });

  return (
    <main className="max-w-screen-xl mx-auto px-2">
      <h1 className="text-3xl text-center text-sky-700 font-semibold mb-3">
        Donorai
      </h1>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-4">
          <DonorContext.Provider value={donorState}>
            <div className="grid grid-cols-3 gap-3">
              {donorState.donors.map((donor) => (
                <div key={donor.id}>
                  <DonorCard donor={donor} />
                </div>
              ))}
            </div>
          </DonorContext.Provider>
        </div>

        <div className="col-span-2">
          <img className="rounded-lg" src={image} alt="imgae" />
        </div>
      </div>
    </main>
  );
};

export default DonorListPage;
