import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = ({ token, userData, logout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={closeMobileMenu}
        />
      )}

      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white/90 backdrop-blur-sm mt-4">
        {/* Logo */}
        <NavLink to="/">
          <img
            src={assets.logo || "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/dummyLogo/prebuiltuiDummyLogo.svg"}
            alt="Logo"
            className="w-36"
          />
        </NavLink>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex md:flex-row md:items-center md:gap-8 md:text-sm md:text-gray-800 md:font-normal">
          <NavLink to="/medicalai" className="hover:text-[#17A4A5] transition-colors">Medical AI</NavLink>
          <NavLink to="/doctors" className="hover:text-[#17A4A5] transition-colors">Doctors</NavLink>
          <NavLink to="/contact" className="hover:text-[#17A4A5] transition-colors">Contact Us</NavLink>
          <NavLink to="/about" className="hover:text-[#17A4A5] transition-colors">About Us</NavLink>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Auth Buttons */}
          {token && userData ? (
            <div className="relative group">
              <div className="flex items-center gap-2 cursor-pointer">
                <img 
                  className="w-8 h-8 rounded-full object-cover" 
                  src={assets.profile_pic} 
                  alt="User" 
                />
                <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
              </div>
              <div className="absolute top-10 right-0 hidden group-hover:flex flex-col min-w-[180px] bg-stone-100 rounded p-4 gap-2 text-gray-700 shadow-lg">
                <p onClick={() => navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                <p onClick={() => navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                <p onClick={logout} className="hover:text-black cursor-pointer">Logout</p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
            >
              Create Account
            </button>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-800 hover:text-[#17A4A5]"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <nav
          onClick={(e) => e.stopPropagation()}
          className={`md:hidden fixed top-0 left-0 h-screen w-full bg-white/95 backdrop-blur-md flex flex-col justify-center items-center gap-6 text-lg transition-transform duration-300 z-40 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <NavLink onClick={closeMobileMenu} to="/medicalai" className="hover:text-[#17A4A5]">Medical AI</NavLink>
          <NavLink onClick={closeMobileMenu} to="/doctors" className="hover:text-[#17A4A5]">Doctors</NavLink>
          <NavLink onClick={closeMobileMenu} to="/contact" className="hover:text-[#17A4A5]">Contact Us</NavLink>
          <NavLink onClick={closeMobileMenu} to="/about" className="hover:text-[#17A4A5]">About Us</NavLink>
          
          {token && userData ? (
            <>
              <NavLink onClick={closeMobileMenu} to="/my-profile" className="hover:text-[#17A4A5]">My Profile</NavLink>
              <NavLink onClick={closeMobileMenu} to="/my-appointments" className="hover:text-[#17A4A5]">My Appointments</NavLink>
              <button onClick={() => { logout(); closeMobileMenu(); }} className="bg-red-500 text-white px-12 py-4 rounded-full hover:bg-red-600 transition">Logout</button>
            </>
          ) : (
            <NavLink onClick={closeMobileMenu} to="/login" className="bg-[#17A4A5] text-white px-12 py-4 rounded-full hover:bg-[#149494] transition">Sign Up</NavLink>
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
