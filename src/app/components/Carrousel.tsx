
'use client';
import { useState } from 'react';
import Header from './Header';

const banners = [
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner1.png',
        title: 'Banner 1',
        description: (<>Faça seus projetos<br />saírem do papel <br />com nosso serviço de<br /> financiamento coletivo </>),
    },
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner2.png',
        title: 'Banner 2',
        description: (<>Soluções especiais<br /> para sua saúde e bem estar <br />juntas em um só lugar!</>),
    },
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner3.png',
        title: 'Banner 3',
        description: (<>Tenha acesso a nossa<br /> plataforma de benefícios únicos<br /> com mais de 200 parceiros<br /> espalhados pelo Brasil! </>),
    },
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner4.png',
        title: 'Banner 4',
        description: (<>
            <b className='font-bold'>Venda mais<br /> gastando menos<br /></b> com nossas <b>campanhas<br /> de incentivo</b>
        </>),
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
            <Header />
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {banners.map((banner, index) => (
                    <div key={index} className="min-w-full h-[500px] relative bg-white">
                        {/* <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-auto object-cover"
                        /> */}
                        <div className="absolute inset-0 " />
                        <div className={`absolute w-full md:w-1/2 inset-0 flex flex-col items-center md:items-start justify-center md:text-left`}>
                            <p className="ml-6 md:ml-14 lg:ml-20 xl:ml-[120px] pb-[200px] md:pb-0 text-xl md:text-3xl text-[rgb(1,24,74)] z-10">{banner.description}</p>
                        </div>
                        <div className="flex-1 md:flex-shrink-0 hidden md:block">
                            <img
                                src={banner.imageLarge}
                                alt={banner.title}
                                className="w-full h-[500px] object-cover"
                            />
                        </div>

                        {/* Imagem para telas pequenas */}
                        <div className="md:hidden">
                            <img
                                src={banner.imageSmall}
                                alt={banner.title}
                                className="w-full h-[300px] object-cover mt-[300px] bg-right"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Botões Laterais */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 text-white"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 text-white"
            >
                &#10095;
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {banners.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrossel;
