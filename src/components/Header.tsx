
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const activeLinkClass = "text-indigo-500 font-semibold";
  const inactiveLinkClass = "hover:text-indigo-500 transition-colors";

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-gray-900">
              AR<span className="text-indigo-600">Mirrors</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
              >
                Trang chủ
              </NavLink>
              <NavLink 
                to="/products" 
                className={({ isActive }) => isActive ? activeLinkClass : inactiveLinkClass}
              >
                Sản phẩm
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
