
'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white p-4 absolute top-0 right-0 w-2/2 z-30">
      <div className=" mx-auto flex justify-between items-right">
        {/* <div className="bg-white rounded-full "> */}

      </div>
      {/* Botão do Menu Hamburger */}
      <button
        className="md:hidden focus:outline-none text-black"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Menu */}
      <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center w-full md:w-auto`}>
        <ul className={`flex flex-col md:flex-row items-center justify-center md:space-x-2 ${isOpen ? 'bg-gray-800 md:bg-transparent absolute top-16 left-0 w-full' : ''}`}>
          <li>
            <Link href="/Incentivo" className="block px-2 py-2 hover:text-blue-200">
              Marketing<br></br> de Incentivo
            </Link>
          </li>
          <li>
            <Link href="https://incentivecuidandodevidas.incentiveplus.com.br/" className="block px-1 py-2 hover:text-blue-200">Cuidando<br></br> de Vida</Link>
          </li>
          <li>
            <Link href="/Blog" className="block px-1 py-2 hover:text-blue-200">Blog</Link>
          </li>
          <li>
            <Link href="#" className="block px-1 py-2 hover:text-blue-200">Sobre Nós</Link>
          </li>
          <li>
            <Link href="#" className="block px-1 py-2 hover:text-blue-200">Contato</Link>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};

export default Header;
