'use client';

import { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  textColor: string;
}

const Header: React.FC<HeaderProps> = ({ textColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`pt-2 absolute top-4 right-10 md:right-[140px] xl:right-[140px] max-w-[70%] z-30 justify-center`}>
      <div className="flex justify-center md:items-right">
        {/* Exibe o logo se necessário */}
        {/* <Image src={logoSrc} alt="Logo" width={200} height={100} /> */}

        {/* Botão do Menu Hamburger */}
        <button
          className="flex md:hidden focus:outline-none text-black absolute right-4 pt-4 "
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menu */}
      <nav className={`${isOpen ? 'fixed top-0 text-center left-0 w-full h-full bg-white z-40' : 'hidden'} md:flex md:w-[50%] md:right-0 md:items-right md:justify-top`}>
        {/* Botão de fechar visível apenas em telas menores */}
        <div className="absolute top-4 right-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="text-red-500 border px-2 rounded-full text-3xl focus:outline-none"
          >
            &times; {/* Ícone de fechar */}
          </button>
        </div>
        <ul className={`flex flex-col items-right justify-center h-full space-y-2 md:flex-row md:space-x-4 ${textColor}`}>
          <li>
            <Link href="/Incentivo" className={`block pt-2 text-sm md:text-md xl:text-lg hover:text-incentive-blue whitespace-nowrap ${textColor}`}>
              Marketing de Incentivo
            </Link>
          </li>
          <li>
            <Link href="https://incentivecuidandodevidas.incentiveplus.com.br/" className={`block text-sm md:text-md xl:text-lg hover:text-incentive-blue whitespace-nowrap ${textColor}`}>
              Cuidando de Vida
            </Link>
          </li>
          <li>
            <Link href="/Blog" className={`block text-sm md:text-md xl:text-lg hover:text-incentive-blue ${textColor}`}>Blog</Link>
          </li>
          <li>
            <Link href="#" className={`block text-sm md:text-md xl:text-lg hover:text-incentive-blue  whitespace-nowrap ${textColor}`}>Sobre Nós</Link>
          </li>
          <li>
            <Link href="#" className={`block text-sm md:text-md xl:text-lg hover:text-incentive-blue ${textColor}`}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
