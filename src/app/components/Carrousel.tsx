
'use client';
import { useState } from 'react';
import Header from './Header';
import GradientUnderline from './Gradient/GradientUnderline';
import Image from 'next/image';

const banners = [
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner1.png',
        title: 'Banner 1',
        description: (<>Faça <b>seus projetos<br />saírem do papel</b> <br />com nosso serviço de <br /> <GradientUnderline><b>financiamento </b></GradientUnderline>coletivo </>),
    },
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner2.png',
        title: 'Banner 2',
        description: (<><b>Soluções especiais</b> <br /> para sua <GradientUnderline><b>saúde e bem estar </b></GradientUnderline><br /><b>juntas em um só lugar!</b></>),
    },
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner3.png',
        title: 'Banner 3',
        description: (<>Acesse a nossa<br /><b> plataforma de benefícios</b><br /> com mais de <GradientUnderline> <b>200</b> </GradientUnderline><b>parceiros</b><br /> <b>espalhados pelo Brasil!</b> </>),
    },
    {
        imageSmall: '/images/imageCell.png',
        imageLarge: '/images/banner4.png',
        title: 'Banner 4',
        description: (<>
            <b>Venda </b><GradientUnderline><b> mais </b></GradientUnderline><br /><b> gastando menos</b><br /> com nossas <b>campanhas<br /> de incentivo</b>
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
        <div className="relative w-full max-w-full mx-auto overflow-hidden ">
            <Image src='/images/logo3.png' alt="logo" width={200} height={200} className="w-[100px] md:w-[200px] absolute inset-0 z-[200] left-4 top-4" />
            <Header />
            <div className="flex transition-transform ease-out duration-500 text-[rgb(1,24,74)]" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {banners.map((banner, index) => (
                    <div key={index} className="min-w-full h-[500px] relative bg-[rgb(255,255,255)]">
                        {/* <img
                            src={banner.image}
                            alt={banner.title}
                            className="w-full h-auto object-cover"
                        /> */}
                        <div className="absolute inset-0 " />
                        <div className={`absolute w-full md:w-1/2 inset-0 flex flex-col items-center md:items-start justify-center md:text-left`}>
                            <p className="px-4 text-2xl  ml-6 md:ml-14 lg:ml-20 xl:ml-[120px] md:leading-[1.2] pb-[200px] md:pb-0 md:text-4xl text-[rgb(1,24,74)] z-10 ">{banner.description}</p>
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
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 shadow-lg">
                <button
                    onClick={prevSlide}
                    className="p-2 text-[rgb(1,24,74)]"
                >
                    &#10094;
                </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 shadow-lg">
                <button
                    onClick={nextSlide}
                    className="p-2 text-[rgb(1,24,74)]"
                >
                    &#10095;
                </button>
            </div>

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
