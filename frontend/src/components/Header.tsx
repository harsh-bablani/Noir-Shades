import { FaUserCircle, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useShop } from '../components/cart'; // or '../context/ShopContext'

const navLinks = [
  { to: '/', label: 'Home', exact: true },
  { to: '/eyeglasses', label: 'Eyeglasses' },
  { to: '/sunglasses', label: 'Sunglasses' },
  { to: '/kids-glasses', label: 'Kids Glasses' },
  { to: '/contact-lenses', label: 'Contact lenses' },
  { to: '/contact-us', label: 'Contact Us' },
];

const Header = () => {
  const { cart, wishlist } = useShop();

  return (
    <header className="bg-blue-50 border-b w-full">
      {/* Top Row: Search and Icons */}
      <div className="flex flex-wrap justify-between items-center px-4 md:px-8 pt-4 md:pt-6 pb-4 md:pb-6">
        {/* Icons Only (no Login/Signup) */}
        <div className="flex items-center gap-5 ml-4 md:ml-8 mt-4 md:mt-0">
          <FaUserCircle className="text-2xl text-gray-600 hover:text-blue-700" />
          <div className="relative">
            <FaHeart className="text-2xl text-gray-600 hover:text-blue-700" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">{wishlist.length}</span>
            )}
          </div>
          <div className="relative">
            <FaShoppingBag className="text-2xl text-gray-600 hover:text-blue-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full px-2 text-xs">{cart.length}</span>
            )}
          </div>
        </div>
      </div>
      {/* Divider Line */}
      <hr className="border-t border-gray-200 mx-4 md:mx-8" />
      {/* Bottom Row: Brand and Navigation */}
      <div className="flex flex-wrap items-center px-4 md:px-8 pb-2 md:pb-4 pt-2">
        {/* Brand Name */}
        <div className="font-bold text-2xl text-blue-900 mr-6 md:mr-10">Noir Shades</div>
        {/* Navigation */}
        <nav className="flex gap-4 md:gap-6 flex-wrap">
          {navLinks.map(({ to, label, exact }) => (
            <NavLink
              key={to}
              to={to}
              end={exact}
              className={({ isActive }) =>
                `font-medium px-4 py-1 rounded-md transition-colors duration-150 ${isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-blue-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
        {/* Mobile menu button placeholder (for future expansion) */}
        {/* <button className="ml-auto md:hidden">Menu</button> */}
      </div>
    </header>
  );
};

export default Header;
