'use client';
import { useState } from 'react';
import Header from './Header';

const banners = [
    {
        image: '/images/banner1.png',
        title: 'Banner 1',
        description: (<>Faça seus projetos<br />saírem do papel <br />com nosso serviço de<br /> financiamento coletivo </>),
    },
    {
        image: '/images/banner2.png',
        title: 'Banner 2',
        description: (<>Soluções especiais<br /> para sua saúde e bem estar <br />juntas em um só lugar!</>),
    },
    {
        image: '/images/banner3.png',
        title: 'Banner 3',
        description: (<>Tenha acesso a nossa<br /> plataforma de benefícios únicos<br /> com mais de 200 parceiros<br /> espalhados pelo Brasil! </>),
    },
    {
        image: '/images/banner4.png',
        title: 'Banner 4',
        description: (<>
            Venda mais<br /> gastando menos<br /> com nossas campanhas<br /> de incentivo
        </>) ,
    },
];

const Carrossel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? banners.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-full mx-auto overflow-hidden">
            <Header/>
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {banners.map((banner, index) => (
                    <div key={index} className="min-w-full h-[500px] relative bg-gray-300">
                        <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute w-1/2 inset-0 flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-bold">{banner.title}</h2>
                            <p className="mt-2 text-lg">{banner.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botões Laterais */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2"
            >
                &#10095;
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {banners.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 bg-white rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrossel;
