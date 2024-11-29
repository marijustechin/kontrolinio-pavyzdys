import { useNavigate, useParams } from 'react-router-dom';
import { IDonor } from './DonorListPage';
import { getById } from '../api/crud';
import { useEffect, useState } from 'react';
import placeholder from '/image-placeholder.jpg';
import { DeleteModal } from '../components/DeleteModal';
import { EditModal } from '../components/EditModal';

export default function DonorDetailsPage() {
  const navigate = useNavigate();
  const [donor, setDonor] = useState<IDonor | string>();
  const { id } = useParams();

  const [openDelete, setOpenDelete] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [update, setUpdate] = useState(false);

  if (!id) {
    setDonor('Neteisinga konfigūracija - nėra donoro id!');
  } else {
    useEffect(() => {
      getDonorDetails(id);
    }, [update]);
  }

  async function getDonorDetails(id: string) {
    const res = await getById(id);
    setDonor(res);
  }

  const handleUpdate = () => {
    setUpdate(false);
    setOpenEdit(true);
  };

  return (
    <main className="max-w-screen-lg mx-auto px-2">
      {/* <p>Vardas: {donor.firstName}</p> */}
      {typeof donor === 'string' ? (
        <span>
          {donor === 'Donoras ištrintas negrįžtamai' ? (
            <>
              <h1 className="text-3xl font-semibold">
                Donoras ištrintas negrįžtamai
              </h1>
              {setTimeout(() => {
                navigate('/donoru-sarasas');
              }, 3000)}
            </>
          ) : (
            donor
          )}
        </span>
      ) : (
        <section className="grid grid-cols-3 bg-slate-200 p-4 rounded-lg">
          <div>
            <h2 className="text-2xl font-semibold text-sky-600 text-center">
              Credo
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
              nisi nulla nam ipsum. Tempora, consequuntur debitis iure inventore
              vitae voluptas.
            </p>
          </div>
          <div className="justify-self-center">
            <img
              className="rounded-md"
              src={placeholder}
              alt="image"
              width={200}
            />
          </div>
          <table className="max-w-fit">
            <tbody>
              <tr>
                <td className="text-right p-2 text-sm">Vardas</td>
                <th className="text-left">{donor?.firstName}</th>
              </tr>
              <tr>
                <td className="text-right p-2 text-sm">Pavardė</td>
                <th className="text-left">{donor?.lastName}</th>
              </tr>
              <tr>
                <td className="text-right p-2 text-sm">Amžius</td>
                <th className="text-left">{donor?.age} m.</th>
              </tr>
              <tr>
                <td className="text-right p-2 text-sm">Lytis</td>
                <th className="text-left">{donor?.gender}</th>
              </tr>
              <tr>
                <td className="text-right p-2 text-sm">Kraujo grupė</td>
                <th className="text-left">{donor?.bloodGroup}</th>
              </tr>
            </tbody>
          </table>
          <div className="col-span-3 flex gap-3 justify-self-center pt-3">
            <button
              onClick={handleUpdate}
              className="btn-generic bg-sky-500 hover:bg-sky-600 text-sky-50"
            >
              Redaguoti
            </button>
            <button onClick={() => setOpenDelete(true)} className="btn-red">
              Ištrinti
            </button>
          </div>
        </section>
      )}
      {openDelete && (
        <DeleteModal
          open={openDelete}
          onClose={() => setOpenDelete(false)}
          onDelete={() => setDonor('Donoras ištrintas negrįžtamai')}
          donor={donor as IDonor}
        />
      )}
      {openEdit && (
        <EditModal
          open={openEdit}
          onClose={() => setOpenEdit(false)}
          onYes={() => {
            setUpdate(true);
          }}
          donor={donor as IDonor}
        />
      )}
    </main>
  );
}
