
'use client';
import React, { useState } from 'react';
import Header from '../components/Header';
import Image from 'next/image';

const page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3; // 6 cards, 3 por página

    const cards = [
        {
            id: 1,
            title: 'Título do Card 1',
            description: 'Descrição do card 1. Lorem ipsum dolor sit amet.',
            imageSrc: '/images/card-image1.png', // Imagem específica do card 1
        },
        {
            id: 2,
            title: 'Título do Card 2',
            description: 'Descrição do card 2. Lorem ipsum dolor sit amet.',
            imageSrc: '/images/card-image2.png', // Imagem específica do card 2
        },
        {
            id: 3,
            title: 'Título do Card 3',
            description: 'Descrição do card 3. Lorem ipsum dolor sit amet.',
            imageSrc: '/images/card-image3.png', // Imagem específica do card 3
        },
        {
            id: 4,
            title: 'Título do Card 4',
            description: 'Descrição do card 4. Lorem ipsum dolor sit amet.',
            imageSrc: '/images/card-image4.png', // Imagem específica do card 4
        },
        {
            id: 5,
            title: 'Título do Card 5',
            description: 'Descrição do card 5. Lorem ipsum dolor sit amet.',
            imageSrc: '/images/card-image5.png', // Imagem específica do card 5
        },
        {
            id: 6,
            title: 'Título do Card 6',
            description: 'Descrição do card 6. Lorem ipsum dolor sit amet.',
            imageSrc: '/images/card-image6.png', // Imagem específica do card 6
        },
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

    const displayedCards = cards.slice((currentPage - 1) * 3, currentPage * 3);

    return (
        <>
            <div className='relative w-full '>
                <Header />
                <Image src="/images/blog.png" alt="Logo" width={1047} height={395} className="w-[80%] h-auto mx-auto" />
                <div className='w-full flex flex-col items-center justify-center text-center text-white p-4 z-20'>
                    <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-4 p-4'>
                {displayedCards.map(card => (
                    <div key={card.id} className='bg-white shadow-lg rounded-lg overflow-hidden w-64'>
                        <Image src={card.imageSrc} alt={card.title} width={256} height={144} className="w-full h-36 object-cover" />
                        <div className='p-4'>
                            <h2 className='font-bold text-lg'>{card.title}</h2>
                            <p className='text-gray-600'>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='flex justify-center items-center mt-6'>
                <button onClick={handlePrevPage} disabled={currentPage === 1} className='px-4 py-2 bg-blue-500 text-white rounded-l'>
                    &#10094; Anterior
                </button>
                <span className='px-4'>{`Página ${currentPage} de ${totalPages}`}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages} className='px-4 py-2 bg-blue-500 text-white rounded-r'>
                    Próximo &#10095;
                </button>
            </div>
        </>
    );
};

export default page;
