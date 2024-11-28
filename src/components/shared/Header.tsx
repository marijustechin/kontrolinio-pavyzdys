import { NavLink } from 'react-router-dom';
import { routerLinks } from '../../router/Router';
import logo from '/donor-logo.png';

export const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-screen-xl mx-auto border-b border-b-sky-700 py-3 mb-5 px-2">
      <div>
        <img src={logo} alt="logo" height={60} />
      </div>
      <div className="flex gap-2 w-[60%]">
        <div className="flex items-center justify-center gap-3">
          {routerLinks.map((link) => (
            <div key={link.title}>
              <NavLink
                className={({ isActive }) =>
                  `${
                    isActive ? 'bg-sky-600 text-sky-50' : ''
                  } rounded-lg py-2 px-3 border font-semibold uppercase shadow-sky-500/40`
                }
                to={link.href}
              >
                {link.title}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};
