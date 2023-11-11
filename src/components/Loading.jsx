import React from 'react';
import logo from "../../public/logo_aiem.png";
const LoadingSpinner = () => {
  return (
    <div className="bg-[#484494] flex items-center justify-center h-screen">
        <img src={logo} className='w-28 animate-bounce' alt="logo" />
    </div>
  );
};

export default LoadingSpinner;