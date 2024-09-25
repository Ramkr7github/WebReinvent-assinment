import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';



const Header = () => {

    const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return (
    <header className="bg-indigo-600 fixed top-0 left-0 w-full shadow-md py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/"><img src="https://webreinvent.com/images/logo-webreinvent.svg" alt="MyLogo" className="h-8" /></a>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="/" className="text-white hover:text-gray-900">Home</a>
          <a href="/about" className="text-white hover:text-gray-900">About</a>
          <a href="/services" className="text-white hover:text-gray-900">Services</a>
          <a href="/contact" className="text-white hover:text-gray-900">Contact</a>
        </nav>

        {/* Logout Button */}
        <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition duration-200"
      >
        Logout
      </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
