import React, { useState } from "react";
import logo from "../../public/logo_aiemB.png"
import {Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-[999] fixed w-full">

<div className="overflow-hidden bg-[#484494]">
  <div className="animate-marquee w-full inline-block whitespace-nowrap">
    <span className="text-white font-custom1">
    La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient - Salle de conférences EMI Rabat - 25 Novembre 2023  |  La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient - Salle de conférences EMI Rabat - 25 Novembre 2023
    </span>
    <span className="text-white font-custom1">
    La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient - Salle de conférences EMI Rabat - 25 Novembre 2023  |  La Gestion Durable de L’Eau, Vers Un Modèle Innovant ET Résilient - Salle de conférences EMI Rabat - 25 Novembre 2023
    </span>
  </div>
  </div>
      
    <div className="navbar bg-white text-blue-900  px-3 lg:px-60">
    <div className="flex-1">
      <Link to="/"><img src={logo} className="w-40" alt="" /></Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 text-base font-custom1 font-medium">
        <li> <Link to="/About">À Propos </Link></li>
        
        <li><a href="https://www.aiem.ma/agenda/la-gestion-durable-de-l-eau-vers-un-modele-innovant-et-resilient-193" className="bg-[#484494] text-white hover:bg-[#524e97] hover:text-white">S'INSCRIRE</a></li>
      </ul>
    </div>
  </div>
  </div>
    
  );
};

export default Navbar;
