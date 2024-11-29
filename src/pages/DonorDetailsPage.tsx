import axios from "axios";
import { useLoaderData, useParams } from "react-router-dom";
import { DONORS_URL } from "../helpers/constants";
import { IDonor } from "./DonorListPage";

interface Params {
  id: string;
}

export default function DonorDetailsPage() {
  const { id } = useParams();
  //const donor = useLoaderData() as IDonor;

  return (
    <main className="max-w-screen-lg mx-auto px-2">
      <h1>{id}</h1>
      {/* <p>Vardas: {donor.firstName}</p> */}
    </main>
  );
}

export const DonorDetailsLoader = async ({ params }: { params: Params }) => {
  const { id } = params;
  console.log("id ", id);
  const res = await axios.get(DONORS_URL + id);
  console.log(typeof params);
  console.log(res.data);
  return res.data;
};
