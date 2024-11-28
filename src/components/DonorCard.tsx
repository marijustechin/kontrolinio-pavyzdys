import { FaFemale, FaMale, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import { IDonor } from '../pages/DonorListPage';
import { useState } from 'react';
import { DeleteModal } from './DeleteModal';

export const DonorCard = ({ donor }: { donor: IDonor }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <div className="max-w-xs border border-sky-400 shadow rounded-lg p-2 flex flex-col items-center">
      <div className="text-sm text-slate-300">ID {donor.id}</div>
      <p className="text-lg font-semibold text-sky-500">
        {donor.firstName + ' ' + donor.lastName}
      </p>
      <div className="flex gap-4 items-end">
        <div>
          {donor.gender === 'moteris' ? (
            <FaFemale className="text-rose-500" size={30} />
          ) : (
            <FaMale className="text-sky-500" size={30} />
          )}
        </div>
        <div>{donor.age} m.</div>
        <div>{donor.bloodGroup}</div>
      </div>
      <div className="flex gap-3 mt-3">
        <button className="rounded-md py-1 px-3 border border-sky-400">
          <FaRegEdit className="text-emerald-600" size={24} />
        </button>
        <button
          onClick={() => setOpenDeleteModal(true)}
          className="rounded-md py-1 px-3 border border-rose-400"
        >
          <FaRegTrashAlt className="text-rose-600" size={24} />
        </button>
      </div>
      {openDeleteModal && (
        <DeleteModal
          id={donor.id}
          open={openDeleteModal}
          onClose={() => setOpenDeleteModal(false)}
        />
      )}
    </div>
  );
};
