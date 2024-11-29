import { Link } from 'react-router-dom';
import image from '/kraujo-donoras.jpg';

const HomePage = () => {
  return (
    <main className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-sky-800 text-3xl font-semibold">
            Kodėl verta tapti kraujo donoru?
          </h1>
          <p>
            „Pirmuosius neatlygintinos kraujo donorystės žingsnius pamenu dar iš
            studentavimo laikų, kai kartą per mokslo metus važiuodavome dovanoti
            kraujo į Žolyno gatvę, esančią Vilniuje. Už tai gaudavome talonus
            nemokamiems pietums, kurie studentus kaskart nudžiugindavo.
          </p>
          <p className="text-center">
            <Link to={'/registracija'}>
              <button className="py-2 px-3 bg-sky-600 rounded-lg text-sky-50 hover:bg-sky-700 duration-300">
                Užsiregistruok ir duok kraujo!
              </button>
            </Link>
          </p>
          <p>
            Mano kraujo donorystės kelias tęsėsi: prieš Lietuvai atgaunant
            nepriklausomybę buvo tokia prievolė, kad būsimasis tėtis, prieš
            gimstant atžalai, turėdavo nemokamai duoti kraujo. Todėl į kraujo
            centrą vykau net porą kartų.
          </p>

          <p>
            Prisimenu ir nelaimę, atsitikusią Armėnijoje. 1988 m. įvykus žemės
            drebėjimui buvo paskelbta, kad nukentėjusiesiems yra reikalingas
            kraujas. Tai sužinojęs, suskubau pagelbėti aukoms dovanodamas
            kraują. Nuo to laiko kraujo duodu daugmaž reguliariai, tai tapo
            gražiu įpročiu. Šis kartas – jau 85-asis, kai džiaugiuosi galėdamas
            prisidėti prie kilniausios misijos – išgelbėti gyvybę.“
          </p>
          <p className="text-right text-sm">
            <Link to={'https://kraujodonoryste.lt/'} target="_blank">
              Informacija paimta iš Nacionalinio kraujo centro
            </Link>
          </p>
        </div>
        <div>
          <img className="rounded-xl" src={image} alt="kraujo donoras" />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
