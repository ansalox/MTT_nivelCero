import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-[#340E71] text-white flex items-center pl-4"> {/* Fondo del Navbar */}
      <img src="/assets/logo.png" width="80" height="50" alt="Logo" />
      <h1 className="text-2xl font-bold ml-4">MENTORTIC - NIVEL CERO</h1>
    </div>
  );
};

export default Navbar;
