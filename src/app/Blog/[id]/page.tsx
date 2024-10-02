// pages/cards/[id].js
'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useState } from 'react';

const CardDetail = () => {
    const { id } = useParams();

    const cards = [
        { id: 1, title: 'Título do Card 1', description: 'Maecenas velit massa nisi imperdiet sagittis viverra non pretium sem...', imageSrc: '/images/blog1.png' },
        { id: 2, title: 'Título do Card 2', description: 'Descrição do card 2. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog2.png' },
        { id: 3, title: 'Título do Card 3', description: 'Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.  Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet. Descrição do card 3. Lorem ipsum dolor sit amet. Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.v', description2: 'Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.', description3: 'Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.Descrição do card 3. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog3.png' },

    ];

    const card = cards.find(card => card.id === parseInt(id));

    if (!card) {
        return <p>Card não encontrado!</p>;
    }

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Image src='/images/logo3.png' alt='Imagem do Blog' width={200} height={200} className='absolute top-3 left-[40px] lg:left-20' />
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
                                className="text-red-500 border px-2 rounded-full text-3xl focus:outline-none"
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
            <div className="container mx-auto py-10 flex flex-col items-center pt-20 mb-[-300px]">
                {/* Imagem principal centralizada */}
                <Image src={card.imageSrc} alt={card.title} width={1200} height={600} className="rounded-md mb-8 w-[80%] h-[380px]" />

                {/* Seção de conteúdo */}
                <div className="w-full flex flex-col xl:flex-row gap-8 px-4 xl:px-16">
                    {/* Textos descritivos à esquerda */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
                        <p className="text-gray-500 mb-2">{`Publicado em: ${card.date} por ${card.author}`}</p>
                        <p className="mt-4 text-lg leading-relaxed">{card.description}</p>
                        {card.description2 && (
                            <p className="mt-2 text-lg leading-relaxed">{card.description2}</p>
                        )}
                        <Image src={card.imageSrc} alt='Imagem do Blog' width={340} height={200} className='py-8' />

                        {card.description3 && (
                            <p className="mt-2 text-lg leading-relaxed">{card.description3}</p>
                        )}

                        <Link href="/Blog" className="mt-6 inline-block text-blue-600 underline">
                            Voltar ao Blog
                        </Link>
                    </div>

                    {/* Seção "Leia Também" abaixo da descrição em telas pequenas, à direita em telas grandes */}
                    <div className="w-full xl:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Leia Também</h2>
                        <div className="flex flex-col gap-4">
                            {cards.filter(c => c.id !== card.id).slice(0, 3).map(suggestedCard => (
                                <Link key={suggestedCard.id} href={`/cards/${suggestedCard.id}`} className="bg-gray-100 rounded-lg p-4 shadow-md flex">
                                    <Image src={suggestedCard.imageSrc} alt={suggestedCard.title} width={100} height={60} className="rounded-md mr-4" />
                                    <div>
                                        <h3 className="font-semibold">{suggestedCard.title}</h3>
                                        <p className="text-gray-600">{suggestedCard.description.slice(0, 60)}...</p>

                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CardDetail;
