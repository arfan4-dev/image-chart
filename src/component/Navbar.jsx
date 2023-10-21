import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { Context } from './ContextApp';

const Navbar = () => {
  const {currentUser}=useContext(Context)
  const handleLogout = async () => {
    try {
      await  signOut(auth);
   <Navigate to='/'/>
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-around items-center">
          <a href="#" className="text-white text-2xl font-bold">
            Your Logo
          </a>
          <ul className="flex space-x-4">
            <li>
              <NavLink to="/home" className="text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/chart" className="text-white">
                Charts
              </NavLink>
            </li>
            <li>
              <NavLink to="/displayPhoto" className="text-white">
                Images
              </NavLink>
            </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="border border-white text-white hover:text-white font-semibold px-4 rounded-full transition duration-300 ease-in-out"
                >
                  Logout
                </button>
              </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
