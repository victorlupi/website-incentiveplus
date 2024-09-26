// 'use client';

// import Image from "next/image";

// const Header = () => {
//   return (
//     <header className=" text-white p-8 absolute top-0 left-0 w-full  z-30">
//       <div className="container mx-auto flex justify-between items-center">
//         <Image src="/images/logo3.png" alt="Logo" width={200} height={100} className="text-2xl font-bold"/>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#" className="hover:text-blue-200">Marketing de Incentivo</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-200">Cuidando de Vida</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-200">Blog</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-200">Sobre Nós</a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-blue-200">Contato</a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
'use client';

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="text-white p-8 absolute top-0 left-0 w-full z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="bg-white rounded-full ">
        <Image src="/images/logo3.png" alt="Logo" width={200} height={100} className="text-2xl font-bold" />
        </div>
        {/* Botão do Menu Hamburger */}
        <button 
          className="md:hidden focus:outline-none" 
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
              <a href="#" className="block px-2 py-2 hover:text-blue-200">Marketing de Incentivo</a>
            </li>
            <li>
              <a href="#" className="block px-2 py-2 hover:text-blue-200">Cuidando de Vida</a>
            </li>
            <li>
              <a href="#" className="block px-2 py-2 hover:text-blue-200">Blog</a>
            </li>
            <li>
              <a href="#" className="block px-2 py-2 hover:text-blue-200">Sobre Nós</a>
            </li>
            <li>
              <a href="#" className="block px-2 py-2 hover:text-blue-200">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
