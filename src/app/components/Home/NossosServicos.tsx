// "use client";
// import Image from "next/image";
// import GradientButton from "../Gradient/GradientButton";
// import Button from "../Button";
// import iconMarketing from "@/../public/icons/Launch.png";
// import iconCrowfounding from "@/../public/icons/crowdfunding 1.png";
// import iconCuidandoVidas from "@/../public/icons/charityyy 1.png";
// import iconClubeBeneficios from "@/../public/icons/trophy 1.png";
// import iconPlataforma from "@/../public/icons/device 1.png";
// import iconRentabilidade from "@/../public/icons/funds 1.png";
// import iconVendas from "@/../public/icons/profit 1.png";
// import iconRegulamento from "@/../public/icons/rule 1.png";
// import iconInvestimentos from "@/../public/icons/financial-growth 1.png";
// import iconMkt from "@/../public/icons/marketing 1.png";
// import iconMapfre from "@/../public/icons/logo-mapfre-MENOR-1 1.png";
// import iconAssistencia from "@/../public/icons/cardiogram (1) 1.png";
// import iconClube from "@/../public/icons/benefits 1.png";
// import iconParceiros from "@/../public/icons/partnership 1.png";
// import iconMarcas from "@/../public/icons/coupon 1.png";
// import iconSorteios from "@/../public/icons/gift-box 1.png";
// import { StaticImageData } from "next/image";

// interface Differentiator {
//   icon: StaticImageData;
//   text: string;
// }

// interface ServiceBlockProps {
//   icon: StaticImageData;
//   title: string;
//   description: string | JSX.Element;
//   differentiators: Differentiator[];
// }

// function ServiceBlock({
//   icon,
//   title,
//   description,
//   differentiators,
// }: ServiceBlockProps) {
//   return (
//     <div className="bg-gray-50 p-6 w-full rounded-2xl mb-6 shadow-xl">
//       <div className="flex h-auto flex-wrap">
//         <Image src={icon} width={45} height={45} alt={title} />
//         <h3 className="md:text-xl font-black text-incentive-blue text-xl pb-3">
//           {title}
//         </h3>
//       </div>
//       <div className="text-justify pb-3">
//         <p>{description}</p>
//       </div>
//       <h4 className="md:text-xs font-black text-incentive-blue text-xs bg-gray-300 pl-6 rounded-full p-2">
//         Diferenciais
//       </h4>
//       <div className="flex-wrap py-3">
//         {differentiators.map((diff, index) => (
//           <div key={index} className="flex items-center gap-2 py-1">
//             <Image
//               src={diff.icon}
//               width={30}
//               height={30}
//               alt={title}
//               className="bg-gradient-to-r from-[#005691] via-[#006ca5] to-[#00a9c8] p-2 rounded-full"
//             />
//             <p className="font-bold">{diff.text}</p>
//           </div>
//         ))}
//       </div>
//       <hr />
//       <div className="pt-6">
//         <Button
//           ariaLabel="Saiba mais!"
//           handleClick={() => alert("Saiba mais!")}
//           type="primary"
//         >
//           Saiba mais!
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default function NossosServicos() {
//   return (
//     <div className="">
//       <div className="text-center">
//         <GradientButton onClick={() => alert("Botão clicado!")}>
//           Serviços
//         </GradientButton>
//       </div>
//       <h2 className="md:text-4xl font-black text-incentive-blue text-xl text-center">
//         Nossos Serviços
//       </h2>

//       <ServiceBlock
//         icon={iconMarketing}
//         title="Marketing de Incentivo"
//         description={
//           <>
//             Marketing de Incentivo é a{" "}
//             <b>
//               análise, planejamento, implementação e controle de campanhas e
//               projetos
//             </b>{" "}
//             formulados com o propósito de{" "}
//             <b>aperfeiçoar o desempenho e desenvolvimento de equipes</b>, para
//             que com isso, metas sejam alcançadas e recompensadas por premiações.
//           </>
//         }
//         differentiators={[
//           {
//             icon: iconPlataforma,
//             text: "Plataforma própria (Show de Prêmios)",
//           },
//           { icon: iconRentabilidade, text: "Alta rentabilidade" },
//           { icon: iconVendas, text: "Aumento de vendas" },
//         ]}
//       />

//       <ServiceBlock
//         icon={iconCrowfounding}
//         title="Crowd funding"
//         description={
//           <>
//             Ele consiste na{" "}
//             <b>obtenção de capital para iniciativas de interesse coletivo</b>{" "}
//             através do financiamento feito por diversas fontes diferentes
//             interessadas neste mesmo projeto, sendo assim, uma excelente opção
//             para pessoas que querem <b>tirar seus projetos do papel</b>, e
//             também, para empreendedores que desejam <b>ampliar seus vínculos</b>{" "}
//             com seus possíveis sócios e colaboradores, permitindo que os mesmos
//             invistam nas empresas que eles atuam e acreditam.
//           </>
//         }
//         differentiators={[
//           { icon: iconRegulamento, text: "Menos regulamentação" },
//           { icon: iconInvestimentos, text: "App de investimentos" },
//           { icon: iconMkt, text: "Marketing e publicidade incluídos" },
//         ]}
//       />

//       <ServiceBlock
//         icon={iconCuidandoVidas}
//         title="Cuidando de Vidas"
//         description={
//           <>
//             Pensada para trazer{" "}
//             <b>benefícios únicos que melhorem a vida e a saúde das pessoas</b>,
//             nós desenvolvemos o projeto Cuidando de Vida, que é um{" "}
//             <b>programa de incentivo a uma vida saudável e sustentável</b> com
//             planos que abrangem diversos serviços que visam fazer da sua vida a
//             ideal.
//           </>
//         }
//         differentiators={[
//           { icon: iconMapfre, text: "Serviços em parceria com a MAPFRE" },
//           { icon: iconAssistencia, text: "Assistência médica completa" },
//           { icon: iconClube, text: "Acesso ao Clube de Benefícios" },
//         ]}
//       />

//       <ServiceBlock
//         icon={iconClubeBeneficios}
//         title="Clube de Benefícios"
//         description={
//           <>
//             O <b>nosso clube de benefícios</b> é uma plataforma de fácil
//             navegação construída para comunicar, de forma efetiva, os
//             benefícios, descontos e convênios que as empresas parceiras oferecem
//             aos nossos clientes.
//           </>
//         }
//         differentiators={[
//           { icon: iconParceiros, text: "+ de 200 parceiros cadastrados" },
//           { icon: iconMarcas, text: "Até 60% com grandes marcas" },
//           {
//             icon: iconSorteios,
//             text: "Sorteios recorrentes sem custo adicional",
//           },
//         ]}
//       />
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import GradientButton from "../Gradient/GradientButton";
import Button from "../Button";
import iconMarketing from "@/../public/icons/Launch.png";
import iconCrowfounding from "@/../public/icons/crowdfunding 1.png";
import iconCuidandoVidas from "@/../public/icons/charityyy 1.png";
import iconClubeBeneficios from "@/../public/icons/trophy 1.png";
import iconPlataforma from "@/../public/icons/device 1.png";
import iconRentabilidade from "@/../public/icons/funds 1.png";
import iconVendas from "@/../public/icons/profit 1.png";
import iconRegulamento from "@/../public/icons/rule 1.png";
import iconInvestimentos from "@/../public/icons/financial-growth 1.png";
import iconMkt from "@/../public/icons/marketing 1.png";
import iconMapfre from "@/../public/icons/logo-mapfre-MENOR-1 1.png";
import iconAssistencia from "@/../public/icons/cardiogram (1) 1.png";
import iconClube from "@/../public/icons/benefits 1.png";
import iconParceiros from "@/../public/icons/partnership 1.png";
import iconMarcas from "@/../public/icons/coupon 1.png";
import iconSorteios from "@/../public/icons/gift-box 1.png";
import { StaticImageData } from "next/image";

interface Differentiator {
  icon: StaticImageData;
  text: string;
}

interface ServiceBlockProps {
  icon: StaticImageData;
  title: string;
  description: string | JSX.Element;
  differentiators: Differentiator[];
}

function ServiceBlock({
  icon,
  title,
  description,
  differentiators,
}: ServiceBlockProps) {
  return (
    <div className="bg-gray-50 rounded-2xl mb-6 shadow-xl ">
      <Image src='/images/fundo-card.png' width={300} height={100} alt={title} className="w-full" />
      <div className="flex h-auto flex-wrap px-10 py-8">
        <Image src={icon} width={45} height={45} alt={title} />
        <h3 className="md:text-xl font-black text-incentive-blue text-xl pb-3">
          {title}
        </h3>
      </div>
      <div className="text-justify pb-3 px-10">
        <p>{description}</p>
      </div>
      <div className="px-10">
        <h4 className="md:text-xs font-black text-incentive-blue text-xs bg-gray-300 pl-6 rounded-full p-2">
          Diferenciais
        </h4>
        <div className="flex-wrap py-3">
          {differentiators.map((diff, index) => (
            <div key={index} className="flex items-center gap-2 py-1">
              <Image
                src={diff.icon}
                width={30}
                height={30}
                alt={title}
                className="bg-gradient-to-r from-[#005691] via-[#006ca5] to-[#00a9c8] p-2 rounded-full"
              />
              <p className="font-bold">{diff.text}</p>
            </div>
          ))}
        </div>
        <hr />
        <div className="py-6 ">
          <Button
          
            ariaLabel="Saiba mais!"
            handleClick={() => alert("Saiba mais!")}
            type="primary"
          >
            Saiba mais!
          </Button>
        </div>
      </div>
      </div>

      );
}

      export default function NossosServicos() {
  return (
      <div className="px-2 sm:px-4 md:px-20">
        <div className="text-center">
          <GradientButton onClick={() => alert("Botão clicado!")}>
            Serviços
          </GradientButton>
        </div>
        <h2 className="md:text-5xl font-black text-incentive-blue text-3xl text-center pt-6 mb-6">
          Nossos Serviços
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceBlock

            icon={iconMarketing}
            title="Marketing de Incentivo"
            description={
              <>
                Marketing de Incentivo é a{" "}
                <b>
                  análise, planejamento, implementação e controle de campanhas e
                  projetos
                </b>{" "}
                formulados com o propósito de{" "}
                <b>aperfeiçoar o desempenho e desenvolvimento de equipes</b>, para
                que com isso, metas sejam alcançadas e recompensadas por premiações.
              </>
            }
            differentiators={[
              {
                icon: iconPlataforma,
                text: "Plataforma própria (Show de Prêmios)",
              },
              { icon: iconRentabilidade, text: "Alta rentabilidade" },
              { icon: iconVendas, text: "Aumento de vendas" },
            ]}
          />

          <ServiceBlock
            icon={iconCrowfounding}
            title="Crowd funding"
            description={
              <>
                Ele consiste na{" "}
                <b>obtenção de capital para iniciativas de interesse coletivo</b>{" "}
                através do financiamento feito por diversas fontes diferentes
                interessadas neste mesmo projeto, sendo assim, uma excelente opção
                para pessoas que querem <b>tirar seus projetos do papel</b>, e
                também, para empreendedores que desejam <b>ampliar seus vínculos</b>{" "}
                com seus possíveis sócios e colaboradores, permitindo que os mesmos
                invistam nas empresas que eles atuam e acreditam.
              </>
            }
            differentiators={[
              { icon: iconRegulamento, text: "Menos regulamentação" },
              { icon: iconInvestimentos, text: "App de investimentos" },
              { icon: iconMkt, text: "Marketing e publicidade incluídos" },
            ]}
          />

          <ServiceBlock
            icon={iconCuidandoVidas}
            title="Cuidando de Vidas"
            description={
              <>
                Pensada para trazer{" "}
                <b>benefícios únicos que melhorem a vida e a saúde das pessoas</b>,
                nós desenvolvemos o projeto Cuidando de Vida, que é um{" "}
                <b>programa de incentivo a uma vida saudável e sustentável</b> com
                planos que abrangem diversos serviços que visam fazer da sua vida a
                ideal.
              </>
            }
            differentiators={[
              { icon: iconMapfre, text: "Serviços em parceria com a MAPFRE" },
              { icon: iconAssistencia, text: "Assistência médica completa" },
              { icon: iconClube, text: "Acesso ao Clube de Benefícios" },
            ]}
          />

          <ServiceBlock
            icon={iconClubeBeneficios}
            title="Clube de Benefícios"
            description={
              <>
                O <b>nosso clube de benefícios</b> é uma plataforma de fácil
                navegação construída para comunicar, de forma efetiva, os
                benefícios, descontos e convênios que as empresas parceiras oferecem
                aos nossos clientes.
              </>
            }
            differentiators={[
              { icon: iconParceiros, text: "+ de 200 parceiros cadastrados" },
              { icon: iconMarcas, text: "Até 60% com grandes marcas" },
              {
                icon: iconSorteios,
                text: "Sorteios recorrentes sem custo adicional",
              },
            ]}
          />
        </div>
      </div>
      );
}
