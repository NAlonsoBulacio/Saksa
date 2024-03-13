import React from 'react';
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className='w-screen h-auto flex  justify-center items-center py-8 z-20 border-b-2 border-gray-900'
         style={{
           backgroundColor: "#4c4c4c",
         }}
    >
      <img src={logo} alt="logo" className='max-w-[200px]' />
    </div>
  );
};

export default Header;