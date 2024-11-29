import axios from 'axios';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { DONORS_URL } from '../helpers/constants';

interface IFormValues {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  bloodGroup: string;
}

export const RegistrationForm = () => {
  const [success, setSuccess] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    const res = await axios.post(DONORS_URL, JSON.stringify(data));

    if (res.status !== 201)
      throw new Error('Arba json-server miega, arba kažkur yra klaida');

    setSuccess('Sveikiname sėkmingai tapus kraujo donoru!');

    setTimeout(() => {
      reset();
      setSuccess('');
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="border border-sky-600 w-full rounded-lg p-2 shadow">
        <legend className="p-2 uppercase">Registracija</legend>
        <div className="w-full h-10 flex justify-center">
          <span className="text-sky-600">
            {success ? (
              <em className="text-lg">{success}</em>
            ) : (
              'Maloniai kviečiame tapti kraujo donoru'
            )}
          </span>
        </div>

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
        <button className="py-2 mt-4 mb-2 rounded-md w-full text-sky-50 bg-sky-500 hover:bg-sky-600">
          Užsiregistruoti
        </button>
      </fieldset>
    </form>
  );
};
