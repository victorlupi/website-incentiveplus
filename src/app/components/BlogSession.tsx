"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";

// Exemplo de imagens. Substitua pelos seus caminhos.
import blogPrincipal from "../../../public/images/blogPrincipal.png";
import blog1 from "../../../public/images/blog1.png";
import blog2 from "../../../public/images/blog2.png";
import blog3 from "../../../public/images/blog3.png";

interface NewsCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

function NewsCard({ image, title, description }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default function Blog() {
  return (
    <div className="max-w-6xl md:mx-20 pb-10 p-4 ">
      <div className=" flex items-center justify-center pb-4">
        <button className="bg-incentive-blue text-white font-bold py-2 px-4 rounded">Blog</button>
        </div>
      <h1 className="text-3xl text-center font-bold mb-8">Destaques da semana</h1>
      {/* Card destacado */}
      <div className="bg-gray-100 rounded-lg shadow-xl flex p-6 mb-8">
        <Image src={blogPrincipal} alt="Notícia em destaque" className="w-1/2 h-auto rounded-lg" />
        <div className="ml-4 w-1/2">
          <h2 className="text-2xl font-bold">Notícia em Destaque</h2>
          <p className="text-gray-600 mt-2">
            Esta é a descrição da notícia em destaque. Aqui você pode fornecer mais detalhes sobre o que torna esta notícia importante.
          </p>
        </div>
      </div>

      {/* Cards de notícias */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NewsCard
          image={blog1}
          title="Notícia 1"
          description="Resumo da notícia 1. Esta notícia é relevante por..."
        />
        <NewsCard
          image={blog2}
          title="Notícia 2"
          description="Resumo da notícia 2. Esta notícia é relevante por..."
        />
        <NewsCard
          image={blog3}
          title="Notícia 3"
          description="Resumo da notícia 3. Esta notícia é relevante por..."
        />
      </div>
    </div>
  );
}
