import { FaFemale, FaMale, FaRegEye } from 'react-icons/fa';
import { IDonor } from '../pages/DonorListPage';
import { Link } from 'react-router-dom';

export const DonorCard = ({ donor }: { donor: IDonor }) => {
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
      <Link to={`${donor.id}`}>
        <button className="rounded-md py-1 px-3 border border-sky-400 flex gap-2 mt-2 hover:bg-sky-200 duration-300">
          <FaRegEye className="text-sky-600" size={24} /> Peržiūrėti
        </button>
      </Link>
    </div>
  );
};
