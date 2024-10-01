// pages/cards/[id].js
'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const CardDetail = () => {
    const { id } = useParams();
   
    const cards = [
        { id: 1, title: 'Título do Card 1', description: 'Maecenas velit massa nisi imperdiet sagittis viverra non pretium sem...', imageSrc: '/images/blog1.png' },
        { id: 2, title: 'Título do Card 2', description: 'Descrição do card 2. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog2.png' },
        { id: 3, title: 'Título do Card 3', description: 'Descrição do card 3. Lorem ipsum dolor sit amet.', imageSrc: '/images/blog3.png' },
        // Outros cards...
    ];

    const card = cards.find(card => card.id === parseInt(id));

    if (!card) {
        return <p>Card não encontrado!</p>;
    }

    return (
        <>
            <Header />
            <div className="container mx-auto py-10 flex flex-col items-center">
                {/* Imagem principal centralizada */}
                <Image src={card.imageSrc} alt={card.title} width={1200} height={600} className="rounded-md mb-8" />
                
                {/* Seção de conteúdo */}
                <div className="w-full flex flex-col xl:flex-row gap-8 px-4 xl:px-16">
                    {/* Textos descritivos à esquerda */}
                    <div className="flex-1">
                        <h1 className="text-4xl font-bold mb-4">{card.title}</h1>
                        <p className="text-gray-500 mb-2">{`Publicado em: ${card.date} por ${card.author}`}</p>
                        <p className="mt-4 text-lg leading-relaxed">{card.description}</p>
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
