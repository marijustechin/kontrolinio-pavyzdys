import { SubmitHandler, useForm } from 'react-hook-form';
import { IoMdClose } from 'react-icons/io';
import { IDonor } from '../pages/DonorListPage';
import { updateDonor } from '../api/crud';

interface IModalProps {
  open: boolean;
  donor: IDonor;
  onClose: () => void;
  onYes: () => void;
}

export interface IFormValues {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  bloodGroup: string;
}

export const EditModal = ({ open, onClose, onYes, donor }: IModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IFormValues>();

  setValue('firstName', donor.firstName);
  setValue('lastName', donor.lastName);
  setValue('age', donor.age);
  setValue('bloodGroup', donor.bloodGroup);
  setValue('gender', donor.gender);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const res = await updateDonor(donor.id, data);
    onYes();
    onClose();
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
        {/* forma */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="border border-sky-600 w-full rounded-lg p-2 shadow">
            <legend className="p-2 uppercase">Donoras</legend>

            <div className="flex flex-col gap-2 max-w-md">
              {/* vardas */}
              <div className="flex flex-col">
                <div className="grid grid-cols-6 items-center gap-2">
                  <label htmlFor="firstName" className="col-span-2 text-right">
                    Vardas
                  </label>
                  <input
                    className="col-span-4 border border-sky-400 rounded-md p-2"
                    type="text"
                    id="firstName"
                    autoComplete="on"
                    {...register('firstName', {
                      required: 'Pamiršote įvesti vardą',
                    })}
                  />
                </div>
                {errors.firstName && (
                  <span className="text-red-500 text-sm text-center">
                    {errors.firstName.message}
                  </span>
                )}
              </div>
              {/* pavarde */}
              <div className="flex flex-col">
                <div className="grid grid-cols-6 items-center gap-2">
                  <label htmlFor="lastName" className="col-span-2 text-right">
                    Pavardė
                  </label>
                  <input
                    className="col-span-4 border border-sky-400 rounded-md p-2"
                    type="text"
                    id="lastName"
                    autoComplete="on"
                    {...register('lastName', {
                      required: 'Pamiršote įvesti pavardę',
                    })}
                  />
                </div>
                {errors.lastName && (
                  <span className="text-red-500 text-sm text-center">
                    {errors.lastName.message}
                  </span>
                )}
              </div>
              {/* amzius */}
              <div className="flex flex-col">
                <div className="grid grid-cols-6 items-center gap-2">
                  <label htmlFor="age" className="col-span-2 text-right">
                    Amžius
                  </label>
                  <input
                    className="col-span-4 border border-sky-400 rounded-md p-2"
                    type="number"
                    id="age"
                    autoComplete="on"
                    {...register('age', {
                      required: 'Prašome nurodyti savo amžių',
                    })}
                  />
                </div>
                {errors.age && (
                  <span className="text-red-500 text-sm text-center">
                    {errors.age.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-6 items-center gap-2">
                  <label className="col-span-2 text-right" htmlFor="gender">
                    Lytis
                  </label>
                  <div className="col-span-4 flex items-center justify-start gap-5">
                    <p className="flex gap-2">
                      Moteris
                      <input
                        type="radio"
                        id="gender"
                        value={'moteris'}
                        {...register('gender', {
                          required: 'Prašome pasirinkti lytį',
                        })}
                      />
                    </p>
                    <p className="flex gap-2">
                      Vyras
                      <input
                        type="radio"
                        id="genderv"
                        value={'vyras'}
                        {...register('gender', {
                          required: 'Prašome pasirinkti lytį',
                        })}
                      />
                    </p>
                  </div>
                </div>
                {errors.gender && (
                  <span className="text-red-500 text-sm text-center">
                    {errors.gender.message}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-6 items-center gap-2">
                  <label htmlFor="bloodGroup" className="col-span-2 text-right">
                    Kraujo grupė
                  </label>
                  <div>
                    <select
                      className="p-2 rounded-md bg-white border border-sky-400 focus:outline-none"
                      id="bloodGroup"
                      {...register('bloodGroup', {
                        required: 'Prašome pasirinkti kraujo grupę',
                      })}
                    >
                      <option value={''}>--pasirinkite--</option>
                      <option value={'O (I)'}>O (I)</option>
                      <option value={'A (II)'}>A (II)</option>
                      <option value={'B (III)'}>B (III)</option>
                      <option value={'AB (IV)'}>AB (IV)</option>
                    </select>
                  </div>
                </div>
                {errors.bloodGroup && (
                  <span className="text-red-500 text-sm text-center">
                    {errors.bloodGroup.message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-3">
              <button
                type="submit"
                className="btn-generic text-sky-50 bg-sky-500 hover:bg-sky-600"
              >
                Išsaugoti
              </button>
              <button onClick={onClose} className="btn-green">
                Atsisakyti
              </button>
            </div>
          </fieldset>
        </form>
        {/* baigesi forma */}
      </div>
    </div>
  );
};
