'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = ({ logoSrc, textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`pt-2  absolute top-0 md:right-0 max-w-[55%] z-30`}>
      <div className=" flex justify-center md:items-right">
        {/* <Image src={logoSrc} alt="Logo" width={200} height={100} /> */}

        {/* Botão do Menu Hamburger */}
        <button
          className="md:hidden focus:outline-none text-black absolute right-10 p-6"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <nav className={`${isOpen ? 'fixed top-0 text-center left-0 w-full h-full bg-incentive-blue z-40' : 'hidden'} md:flex md:w-[50%] md:right-0 md:items-right md:justify-top`}>
        {/* Botão de fechar visível apenas em telas menores */}
        <div className="absolute top-4 right-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-red-500 border px-2 rounded-full text-3xl focus:outline-none"
          >
            &times; {/* Ícone de fechar */}
          </button>
        </div>
        <ul className={`flex flex-col items-right justify-center h-full space-y-2 md:flex-row md:space-x-8 ${textColor}`}>
          <li>
            <Link href="/Incentivo" className={`block text-md md:text-md xl:text-lg hover:text-blue-200 ${textColor}`}>
              Marketing de Incentivo
            </Link>
          </li>
          <li>
            <Link href="https://incentivecuidandodevidas.incentiveplus.com.br/" className={`block text-sm md:text-md xl:text-lg hover:text-blue-200 ${textColor}`}>
              Cuidando de Vida
            </Link>
          </li>
          <li>
            <Link href="/Blog" className={`block text-sm md:text-md xl:text-lg hover:text-blue-200 ${textColor}`}>Blog</Link>
          </li>
          <li>
            <Link href="#" className={`block text-sm md:text-md xl:text-lg hover:text-blue-200 ${textColor}`}>Sobre Nós</Link>
          </li>
          <li>
            <Link href="#" className={`block text-sm md:text-md xl:text-lg hover:text-blue-200 ${textColor}`}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
