import Image from "next/image";

const items = [
  {
    title: "Ícone 1",
    description: "Descrição para o ícone 1.",
    icon: "/images/foguete.png",
    bar: "/images/barraRgb.png",
  },
  {
    title: "Ícone 2",
    description: "Descrição para o ícone 2.",
    icon: "/images/incentivo.png",
    bar: "/images/barraRgb.png",
  },
  {
    title: "Ícone 3",
    description: "Descrição para o ícone 3.",
    icon: "/images/coracao.png",
    bar: "/images/barraRgb.png",
  },
  {
    title: "Ícone 4",
    description: "Descrição para o ícone 4.",
    icon: "/images/trofeu.png",
    bar: "/images/barraRgb.png",
  },
];

export default function ComponenteComBackground() {
  return (
    <div className="relative bg-contain bg-no-repeat w-full h-[400px] bg-center " >
      <Image src="/images/fundoOnda.png" alt="Fundo Onda" width={400} height={400} className="absolute inset-0 w-full h-auto object-contain " />
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center pt-[270px] px-4 md:px-8">
       
          <h1 className="text-4xl font-bold text-[rgb(1,24,74)] text-center pr-10 pb-6">Nossos<br></br> serviços</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            {items.map((item, index) => (
              <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-md">
                <div className="w-16 h-16 flex items-center justify-center mr-4">
                  <Image src={item.icon} alt={item.title} width={64} height={64} />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <div className="flex">
                    <div className="mr-4">
                      <Image src={item.bar} alt="Bar" width={10} height={70} />
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
}
