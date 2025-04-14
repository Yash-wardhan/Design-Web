import React from 'react';
import PropaceLogo from '../assets/ProgaceLogo.png';

function Navbar() {
  return (
    <nav className="bg-dark-green text-white py-2 px-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={PropaceLogo} alt="Propace Logo" className="h-6" />
        <span className="ml-2 font-semibold">Propace</span>
      </div>
      <div className="flex gap-2">
        <button className="text-white border border-white rounded px-3 py-1 text-sm">Sign in</button>
        <button className="bg-light-green text-dark-green rounded px-3 py-1 text-sm font-medium">Sign up</button>
      </div>
    </nav>
  );
}

export default Navbar;