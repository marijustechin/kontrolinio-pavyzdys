import { RegistrationForm } from '../components/RegistrationForm';

const RegistrationPage = () => {
  return (
    <main className="max-w-screen-xl mx-auto px-2 py-3">
      <div className="flex gap-4 justify-around">
        <div>
          <h1 className="text-3xl text-sky-600 p-3">Kraujo davimo eiga</h1>
          <ul className="text-lg p-2">
            <li>1. Pasiruošimas kraujo donorystei</li>
            <li>2. Registracija</li>
            <li>3. Kraujo tyrimai prieš donorystę</li>
            <li>4. Konsultacija su gydytoju</li>
            <li>5. Donorystės procedūra</li>
            <li>6. Kraujo tyrimai davus kraujo</li>
          </ul>
        </div>
        <div>
          <RegistrationForm />
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;
