
'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <div className='w-full text-gray-800 pt-[20rem] md:pt-[8rem] md:px-14 lg:px-20'>
        <div className="flex justify-center lg:pt-20">
          <a href="#" className="bg-white rounded-full p-2 w-10 h-10 border">
            <Image src="/images/forward.png" alt="Logo" width={60} height={60} className="text-2xl text-white" />
          </a>
        </div>
        <div className="w-full flex justify-center items-center pt-10 pb-2">
          <Image
            src="/images/logo3.png"
            width={60}
            height={100}
            className="w-[200px] h-auto"
            alt="Logo"
          />
        </div>
        <div className="flex text-center justify-center items-center pb-4 hover:text-blue-400 px-8 md:px-20">
          ❤️ ©️ Incentive Plus |  Todos os Direitos Reservados.
        </div>
        <div className="border-t border-transparent pb-4 mx-10">
          <div className="h-1 bg-gradient-to-r from-green-500 to-blue-500"></div>
        </div>
       
        <div className="grid grid-cols-2 md:grid-cols-4 px-8 md:px-20 pb-4 ">

          <div className='text-xs flex flex-col items-center gap-4 py-6 sm:py-0'>
            <h5 className='mb-4'>NOSSAS REDES SOCIAIS</h5>
            <div className='flex gap-4'>
              <Image src="/images/facebook.png" alt="facebook" width={60} height={60} className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
              <Image src="/images/instagram.png" alt="instagram" width={60} height={60} className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
              <Image src="/images/linkedin.png" alt="linkedin" width={60} height={60} className="text-2xl sm:text-4xl md:text-5xl text-white/60 hover:text-white cursor-pointer duration-300" />
            </div>
          </div>

          <div className='text-[10px] sm:text-xs flex flex-col items-center py-6 px-4 sm:py-0'>
            <h5 className='mb-4'>SERVIÇOS</h5>
            <ul className='text-center'>
              <li>INCENTIVE PLUS</li>
              <li>Serviços</li>
              <li>Criação de Site</li>
              <li>Criação de Loja Virtual</li>
            </ul>
          </div>

          <div className='flex flex-col items-center py-6 px-4 sm:py-0 text-[10px] sm:text-xs'>
            <h5 className='mb-4'>ESCRITÓRIOS INCENTIVE PLUS</h5>
            <ul className='text-center'>
              <li>São Paulo:</li>
              <li>Rua Ana Pereira Melo, 253 - Sala 703 - Vila Campesina – Osasco/SP</li>
              <li>(11) 3016-1870 | (11) 94746-4479</li>
            </ul>
          </div>

          <div className='flex flex-col items-center py-6 px-4 sm:py-0 text-[10px] sm:text-xs'>
            <h5 className='mb-4'>SÃO JOSÉ DO RIO PRETO</h5>
            <ul className='text-center'>
              <li>R. Martinho Gonçalves, 2140 - Vila Nossa Senhora da Paz - São José do Rio Preto/SP</li>
              <li>(17) 3364-9940</li>
              <li>CNPJ: 42.931.435/0001-08</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
