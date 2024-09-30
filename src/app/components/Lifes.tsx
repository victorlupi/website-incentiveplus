import Image from 'next/image';
import React from 'react';

const Lifes = () => {
    return (
        <div className='relative w-full h-[300px] py-10'>
            <Image 
                src="/images/fundoGradient.png" 
                alt="Mais de 3000 vidas" 
                width={1400} 
                height={226} 
                className="w-full h-[300px] object-cover" 
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                <h1 className='text-5xl font-bold text-white text-center pt-16'>+3000<br></br> vidas alcançadas</h1>
                <p className='text-sm font-light text-center text-white'>Quantidade de colaboradores de empresas clientes</p>
            </div>
        </div>
    );
};

export default Lifes;
