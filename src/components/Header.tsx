
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

          {/* Hamburger icon for mobile */}
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

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
        {/* mobile menu (slide down) */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 px-2 pt-2 pb-3">
              <NavLink onClick={()=>setMenuOpen(false)}
                to="/"
                className={({ isActive }) => isActive ? `${activeLinkClass} block py-2 px-3` : `${inactiveLinkClass} block py-2 px-3`}
              >Trang chủ</NavLink>
              <NavLink onClick={()=>setMenuOpen(false)}
                to="/products"
                className={({ isActive }) => isActive ? `${activeLinkClass} block py-2 px-3` : `${inactiveLinkClass} block py-2 px-3`}
              >Sản phẩm</NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
