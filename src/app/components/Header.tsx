'use client';

import Image from "next/image";

const Header = () => {
  return (
    <header className=" text-black p-8 absolute top-0 left-0 w-full  z-30">
      <div className="container mx-auto flex justify-between items-center">
        <Image src="/images/logo3.png" alt="Logo" width={200} height={100} className="text-2xl font-bold"/>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-blue-500">Marketing de Incentivo</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Cuidando de Vida</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Sobre Nós</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
