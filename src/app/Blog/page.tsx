'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
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

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Image src='/images/logo3.png' width={160} height={100} alt='Logo' className='absolute top-5 left-[45px] lg:left-[140px]' />
            <header className="text-incentive-blue p-4 absolute top-0 right-[80px] lg:right-[140px] w-2/2 z-30">
                <div className="mx-auto flex justify-between items-right">
                    {/* Botão do Menu Hamburger */}
                    <button
                        className="md:hidden focus:outline-none text-black absolute top-[30px] right-[-35px]"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        
                    </button>

        
                   {/* Menu */}
                    <nav className={`md:flex md:items-center w-full md:w-auto ${isOpen ? 'fixed top-0 left-0 w-full h-full bg-incentive-blue  z-40' : 'hidden'}`}>
                        <div className="absolute top-4 right-4">
                            <button
                                onClick={toggleMenu}
                                className="md:hidden text-red-500 border px-2 rounded-full text-3xl focus:outline-none"
                            >
                                &times; {/* Ícone de fechar */}
                            </button>
                        </div>
                        <ul className={`flex flex-col items-center justify-center h-full space-y-4 ${isOpen ? '' : 'hidden'}`}>
                            <li>
                                <Link href="/Incentivo" className="block text-white text-2xl hover:text-blue-200">Marketing<br />de Incentivo</Link>
                            </li>
                            <li>
                                <Link href="https://incentivecuidandodevidas.incentiveplus.com.br/" className="block text-white text-2xl hover:text-blue-200">Cuidando<br />de Vida</Link>
                            </li>
                            <li>
                                <Link href="/Blog" className="block text-white text-2xl hover:text-blue-200">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-white text-2xl hover:text-blue-200">Sobre Nós</Link>
                            </li>
                            <li>
                                <Link href="#" className="block text-white text-2xl hover:text-blue-200">Contato</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className='relative w-full'>
                <Image src="/images/blog.png" alt="Logo" width={1047} height={395} className="w-[80%] h-[395px] mx-auto pt-20" />
                <div className='absolute border border-white rounded-xl bottom-[-30px] md:py-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75%] bg-black/30 flex flex-col items-center justify-center text-white p-4'>
                    <h1 className='md:text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>
            <div className='flex  '>
                <div className='flex flex-wrap justify-center gap-4 p-4 w-full lg:w-[75%]'>
                    {displayedCards.map(card => (
                        <Link key={card.id} href={`/Blog/${card.id}`}>
                            <div key={card.id} className='bg-white shadow-lg rounded-lg overflow-hidden w-60'>
                                <Image src={card.imageSrc} alt={card.title} width={256} height={144} className="w-full h-36 object-cover" />
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
                {/* Card adicional no espaço da direita em telas grandes */ }
                        < div className = 'hidden lg:block w-[25%] h-[200px] pt-14 pr-[120px]' >
                        <div className='flex flex-col gap-2 bg-white shadow-lg rounded-lg overflow-hidden p-6'> {/* Adicionei p-4 aqui */}
                            <button disabled className='px-2 py-2 bg-white text-black border border-black rounded-3xl'>Crowdfunding</button>
                            <button disabled className='px-2 py-2 bg-white text-black border border-black rounded-3xl'>Marketing de Incentivo</button>
                            <button disabled className='px-2 py-2 bg-white text-black border border-black rounded-3xl'>Investimento</button>
                            <button disabled className='px-2 py-2 bg-white text-black border border-black rounded-3xl'>Saúde e bem-estar</button>
                            <button disabled className='px-2 py-2 bg-white text-black border border-black rounded-3xl'>Empresarial</button>
                            <button disabled className='px-2 py-2 bg-white text-black border border-black rounded-3xl'>Tecnologia</button>
                        </div>
                </div>



            </div>

            <Footer />
        </>
    );
};

export default Page;
