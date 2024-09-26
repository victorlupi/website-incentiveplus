"use client";
import Image from "next/image";
import FormContact from "./FormContact"; 
import fundoContato from "@/../public/images/fundoContato.png";

const images = [
  {
    src: "/images/phone.png", 
    alt: "Imagem 1",
    text: "(11) 3016-1870 | (11) 94746-4479",
  },
  {
    src: "/images/phone.png",
    alt: "Imagem 2",
    text: "(17) 3364-9940",
  },
  {
    src: "/images/address.png",
    alt: "Imagem 3",
    text: "Rua Ana Pereira Melo, 253 - Sala 703 - Vila Campesina – Osasco/SP",
  },
  {
    src: "/images/address.png",
    alt: "Imagem 4",
    text: "R. Martinho Gonçalves, 2140 - Vila Nossa Senhora da Paz - São José do Rio Preto/SP",
  },
];

export default function ContactSection() {
  return (
    <div
      className="relative w-full h-[300px] bg-cover bg-center"
      style={{ backgroundImage: `url(${fundoContato.src})` }}
    >
      <div className="absolute inset-0"></div>
      <div className="relative z-10 max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center h-full">
        <div className="flex-1 pr-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">Entre em<br></br> Contato</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 mb-10">
            {images.map((image, index) => (
              <div key={index} className="flex items-start">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={30}
                  height={30}
                  className="mr-4"
                />
                <p className="text-white text-xs">{image.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full  md:w-1/2 pt-6 md:pt-[12rem]">
          <FormContact />
        </div>
      </div>
    </div>
  );
}
