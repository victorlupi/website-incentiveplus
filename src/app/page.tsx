"use client";

import Image from "next/image";
import womanIndex from "@/../public/business-finance-employment-female-successful-entrepreneurs-concept-confident-smiling-asian-businesswoman-office-worker-white-suit-glasses-using-laptop-help-clients 1.png";
import about from "@/../public/about.png";
import GradientUnderline from "./components/Gradient/GradientUnderline";
import GradientButton from "./components/Gradient/GradientButton";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col md:flex-row md:items-center md:gap-10">
        <Image
          src={womanIndex}
          alt="Mulher com notebook"
          width={304.73}
          height={303}
          className="w-1/2 m-auto"
        />
        <h1 className="md:text-4xl font-black text-incentive-blue text-xl text-center">
          Uma empresa que ajudar a sua encontrar{" "}
          <GradientUnderline>sucesso!</GradientUnderline>
        </h1>
      </div>
      <div>
        <Image
          src={about}
          alt="Mulher com notebook"
          width={304.73}
          height={303}
          className="w-1/2 m-auto"
        />
        <h1 className="md:text-4xl font-black text-incentive-blue text-xl text-center">
          Sobre nós
        </h1>
        <GradientButton onClick={() => alert("Botão clicado!")}>
          Sobre nós
        </GradientButton>
        <p>
          A <span className="font-bold">Incentive Plus</span> nasceu do
          propósito de trazer diversas
          <span className="font-bold">
            soluções com o foco no crescimento e desenvolvimento
          </span>
          de empresas e colaboradores, pois sabemos que ambos precisam um do
          outro para crescer e que cada um tem necessidades individuais para
          isso.
        </p>
      </div>
    </main>
  );
}
