import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/eyeglasses', label: 'Eyeglasses' },
  { to: '/sunglasses', label: 'Sunglasses' },
  { to: '/kids-glasses', label: 'Kids Glasses' },
  { to: '/contact-lenses', label: 'Contact lenses' },
  { to: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-blue-50 shadow-sm border-b w-full sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold text-blue-900">Noir Shades</div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `text-sm font-medium px-3 py-2 rounded-md transition-all duration-150 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-100'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-blue-900">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner px-4 pb-4">
          {navLinks.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block py-2 text-base font-medium border-b ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
