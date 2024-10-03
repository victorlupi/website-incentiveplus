'use client';
import React, { useState } from 'react';
import HeaderBranco from '../components/HeaderBranco';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const cards = [
        { id: 1, title: 'Título do Card 1', description: 'Descrição do card 1. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog1.png' },
        { id: 2, title: 'Título do Card 2', description: 'Descrição do card 2. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog2.png' },
        { id: 3, title: 'Título do Card 3', description: 'Descrição do card 3. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog3.png' },
        { id: 4, title: 'Título do Card 4', description: 'Descrição do card 4. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog4.png' },
        { id: 5, title: 'Título do Card 5', description: 'Descrição do card 5. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog5.png' },
        { id: 6, title: 'Título do Card 6', description: 'Descrição do card 6. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog6.png' },
        { id: 7, title: 'Título do Card 7', description: 'Descrição do card 7. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog7.png' },
        { id: 8, title: 'Título do Card 8', description: 'Descrição do card 8. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog8.png' },
        { id: 9, title: 'Título do Card 9', description: 'Descrição do card 9. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog9.png' },
        { id: 10, title: 'Título do Card 10', description: 'Descrição do card 10. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog10.png' },
        { id: 11, title: 'Título do Card 11', description: 'Descrição do card 11. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog11.png' },
        { id: 12, title: 'Título do Card 12', description: 'Descrição do card 12. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog12.png' },
    ];

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const displayedCards = cards.slice((currentPage - 1) * 6, currentPage * 6);


    return (
        <>
        <Link href='/'>
            <Image src='/images/logo3.png' width={160} height={100} alt='Logo' className='absolute top-5 left-[45px] lg:left-[140px]' />
        </Link>
            <HeaderBranco textColor='black' />

            <div className='relative w-full'>
                <Image src="/images/blog.png" alt="Logo" width={1047} height={395} className="w-[80%] h-[395px] mx-auto pt-20" />
                <div className='absolute border border-white rounded-xl bottom-[-30px] md:py-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] bg-black/30 flex flex-col items-center justify-center text-white p-4'>
                    <h1 className='md:text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
            <div className='flex '>
                <div className='flex flex-wrap justify-center gap-4 pt-4 w-full lg:w-[75%] pl-20'>
                    {displayedCards.map(card => (
                        <Link key={card.id} href={`/Blog/${card.id}`}>
                            <div key={card.id} className='bg-white shadow-lg rounded-lg overflow-hidden w-60'>
                                <Image src={card.imageSrc} alt={card.title} width={224} height={144} className="w-full h-36 object-cover" />
                                <div className='p-4'>
                                    <h2 className='font-bold text-lg'>{card.title}</h2>
                                    <p className='text-gray-600'>{card.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                    <div className='flex justify-center items-center mt-6'>
                        <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 bg-white text-black border rounded-l'>
                            &#10094;
                        </button>
                        <span className='px-4'>{`Página ${currentPage} de ${totalPages}`}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 bg-white text-black border rounded-r'>
                            &#10095;
                        </button>
                    </div>


                </div>
                {/* Card adicional no espaço da direita em telas grandes */}
                < div className='hidden lg:block w-[15%] h-[200px] pt-14 pr-[6px]' >
                    <div className='flex flex-col gap-2 bg-white shadow-lg rounded-lg overflow-hidden p-2 text-xs'> {/* Adicionei p-4 aqui */}
                        <button disabled className='px-1 py-2 bg-white text-black border border-black rounded-3xl'>Crowdfunding</button>
                        <button disabled className='px-1 py-2 bg-white text-black border border-black rounded-3xl'>Marketing de Incentivo</button>
                        <button disabled className='px-1 py-2 bg-white text-black border border-black rounded-3xl'>Investimento</button>
                        <button disabled className='px-1 py-2 bg-white text-black border border-black rounded-3xl'>Saúde e bem-estar</button>
                        <button disabled className='px-1 py-2 bg-white text-black border border-black rounded-3xl'>Empresarial</button>
                        <button disabled className='px-1 py-2 bg-white text-black border border-black rounded-3xl'>Tecnologia</button>
                    </div>
                </div>



            </div>

            <Footer />
        </>
    );
};

export default Page;
