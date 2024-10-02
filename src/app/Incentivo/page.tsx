'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
// import Header from '../components/Header';
import { url } from 'inspector';
import GradientUnderline from '../components/Gradient/GradientUnderline';
import Link from 'next/link';

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div className="relative w-full h-[437px]">
                <Image
                    src="/images/fundoIncentivo.png"
                    alt="Logo"
                    layout="fill"
                    className="object-cover"
                />
                <Link href="/" className="absolute inset-0 z-[100]">
                <Image src='/images/logoB.png' alt="logo" width={200} height={200} className="w-[100px] md:w-[200px] absolute inset-0 z-[200] left-4 top-4" />
                </Link>
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

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <h1 className="text-4xl font-bold pb-4 ">Marketing de Incentivo</h1>
                    <span className="border-1 border-white bg-[rgb(0,130,181)] p-3 rounded-3xl" >Venda mais investindo do jeito certo!</span>
                    <p className="mt-4 max-w-[800px] px-4">Com o Marketing de Incentivo em sua empresa você tem acesso a um conjunto de estratégias e ações implementadas no ambiente corporativo com o objetivo de motivar e engajar os colaboradores a alcançarem metas com recompensas pré-estabelecidas</p>
                </div>
            </div>

            <section className="flex flex-col md:flex-row items-center justify-center text-[rgb(1,24,74)]">
                <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                    <Image src="/images/mulher.png" alt="Incentivo" width={500} height={500} className="w-[300px] h-[300px] object-contain" />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                    <h2 className='text-xl'>Receba um</h2>
                    <h1 className='text-4xl font-bold'>Diagnóstico <GradientUnderline>Grátis!</GradientUnderline></h1>
                    <p className='max-w-[500px]'>Nós fazemos a avaliação 360° de seus negócios, desempenho e mercado para indicar a melhor solução para seu crescimento com nossas ferramentas de forma 100% grátis!</p>
                    <button className="mt-4 bg-[rgb(1,24,74)] text-white px-4 py-2 rounded-3xl">Quero vender mais!</button>
                </div>
            </section>


            <section className='w-full py-10 text-[rgb(1,24,74)]'>
                <div className='text-center mb-8'>
                    <h2 className='text-xl '>Como funcionam as</h2>
                    <h1 className='text-4xl font-bold mb-4'>Campanhas de Incentivo?</h1>
                    <p className='max-w-[800px] mx-auto'>
                        As <b>Campanhas de Incentivo</b> são um conjunto de ações planejadas com período de tempo determinado e resultados mensuráveis, utilizando de nossas ferramentas para aplicar soluções plausíveis com sua equipe de vendas a fim de <b>aprimorar seu desempenho e conquistar objetivos.</b>
                    </p>
                </div>
                <div className='w-full py-8 md:py-20' style={{ backgroundImage: "url('/images/ondaIncentivo.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[800px]">
                            {[
                                { src: "/images/dinheiro.png", alt: "Dinheiro", text: "Venda mais" },
                                { src: "/images/alta.png", alt: "Alta", text: "Aumente os lucros" },
                                { src: "/images/mao.png", alt: "Mão", text: "Motive sua equipe" },
                                { src: "/images/relatorio.png", alt: "Relatório", text: "Benefícios fiscais" }
                            ].map((icon, index) => (
                                <div key={index} className="flex flex-col items-center border-2 border-[rgb(250,250,250)] bg-[rgb(250,250,250)] px-3 py-8 rounded-3xl">
                                    <Image src={icon.src} alt={icon.alt} width={100} height={100} />
                                    <p className="mt-2 text-md text-center text-[rgb(1,24,74)]">{icon.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            <section className='grid grid-cols-1 md:grid-cols-2 text-[rgb(1,24,74)] px-4 lg:px-[10rem] md:pb-20 '>
                {/* Título e Descrição à esquerda */}
                <div className='text-center md:text-left mb-8 md:mb-0'>
                    <h1 className='text-3xl md:text-5xl font-bold pb-4'>Trinômio das Campanhas</h1>
                    <p className='max-w-[360px] text-lg px-4'>Lorem ipsum dolor sit amet consectetur. Elementum id suspendisse congue scelerisque condimentum magna egestas. Et volutpat facilisis egestas aliquam porta interdum commodo tincidunt quam.</p>
                </div>

                {/* Ícones e Descrições à direita */}
                <div className='flex flex-col justify-center'>
                    {[
                        {
                            imgSrc: "/images/montanha.png",
                            title: "ESTÍMULO",
                            description: "O Estímulo é a meta a ser alcançada por cada participante."
                        },
                        {
                            imgSrc: "/images/fogueteUp.png",
                            title: "AÇÃO",
                            description: "A Ação é a estratégia da campanha com todas as informações de como os participantes devem proceder para conseguir alcançar a meta."
                        },
                        {
                            imgSrc: "/images/trofeus.png",
                            title: "RECOMPENSA",
                            description: "A Recompensa é constituída dos prêmios estabelecidos previamente a serem entregues por consequência das metas."
                        }
                    ].map((item, index) => (
                        <div key={index} className='flex items-center mb-2'>
                            <div className='flex-shrink-0'>
                                <Image src={item.imgSrc} alt={`Imagem ${index + 1}`} width={100} height={100} className="object-contain w-[100px]" />
                            </div>
                            <div className='ml-4 text-left'>
                                <h2 className='text-md font-semibold'>{item.title}</h2>
                                <p className='text-sm'>{item.description}</p>
                                <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] rounded-l-lg flex items-center justify-center"></div>
                                <div className=' max-w-[100px] h-1 bg-gradient-to-r from-[rgb(126,194,48)] via-[rgb(0,201,138)] to-[rgb(0,112,163)] rounded-lg mt-2'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className='grid grid-cols-1 text-[rgb(1,24,74)] py-10'>
                <div className='text-center'>
                    <h2 className='md:text-xl'>Para revolucionar seus negócios</h2>
                    <h1 className='text-3xl md:text-5xl font-bold pb-4'>Show de Prêmios</h1>

                    <p className='max-w-[800px] mx-auto pb-20 px-4'>O Show de Prêmios é uma ferramenta da Incentive Plus criada com o propósito de desenvolver pessoas através de uma plataforma completa com soluções que vão desde a conversão de vendas em pontos para troca por recompensas, treinamentos em vídeos e análise de desempenho individual de cada colaborador.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-6 lg:px-[10rem] md:pb-20'>
                    {[
                        {
                            imgSrc: "/images/moedas.png",
                            title: "Prêmio 1",
                            description: "Venda produtos da loja e converta em pontos para sua carteira!"
                        },
                        {
                            imgSrc: "/images/controle.png",
                            title: "Prêmio 2",
                            description: "Jogue diversos jogos e ganhe mais pontos!."
                        },
                        {
                            imgSrc: "/images/botao.png",
                            title: "Prêmio 3",
                            description: "Faça login diariamente e  ganhe pontos!"
                        },
                        {
                            imgSrc: "/images/icones.png",
                            title: "Prêmio 4",
                            description: "E muito mais!"
                        }
                    ].map((item, index) => (
                        <div key={index} className='flex items-center p-4 bg-[rgb(250,250,250)] rounded-3xl'>
                            <div className='flex-shrink-0'>
                                <Image src={item.imgSrc} alt={item.title} width={85} height={85} className="object-contain" />
                            </div>
                            <div className='ml-4'>
                                {/* <h2 className='text-lg font-semibold'>{item.title}</h2> */}
                                <p className='text-md'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </section>


            <ContactSection />
            <Footer />
        </>
    );
}

export default Page;
