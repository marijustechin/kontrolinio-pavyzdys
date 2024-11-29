import { IoMdClose } from 'react-icons/io';
import { IDonor } from '../pages/DonorListPage';
import { deleteById } from '../api/crud';
import { useState } from 'react';

interface IModalProps {
  open: boolean;
  donor: IDonor;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({
  open,
  donor,
  onClose,
  onDelete,
}: IModalProps) => {
  const [deleteError, setDeleteError] = useState('');
  const handleDelete = async () => {
    const res = await deleteById(donor.id);
    if (typeof res === 'string') {
      setDeleteError(res);
    } else {
      onDelete();
      onClose();
    }
  };

  return (
    /** overlejus */
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? 'visible bg-slate-800/50' : 'invisible'
      }`}
      onClick={onClose}
    >
      {/* langas */}
      <div
        // reikia sustabdyti is tevo
        // paveldeta onclik funkcija
        onClick={(e) => e.stopPropagation()}
        className={`bg-slate-100 rounded-xl shadow p-6 transition-all text-lg w-[400px] ${
          open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-slate-500 bg-slate-50 hover:bg-slate-200 hover:text-slate-600"
        >
          <IoMdClose />
        </button>

        <div>
          {deleteError ? (
            <p>{deleteError}</p>
          ) : (
            <>
              {' '}
              <p>Ar tikrai norite ištrinti donorą</p>
              <p className="text-center font-semibold text-lg">
                {donor.firstName + ' ' + donor.lastName} ?
              </p>
            </>
          )}
        </div>
        <div className="flex gap-3 items-center justify-center mt-3">
          <button onClick={handleDelete} className="btn-red">
            Taip
          </button>
          <button onClick={onClose} className="btn-green">
            Atsisakyti
          </button>
        </div>
      </div>
    </div>
  );
};
