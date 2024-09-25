"use client";
import Image from "next/image";
import about from "@/../public/about.png";
import GradientButton from "../Gradient/GradientButton";

export default function SobreNos() {
  return (
    <div className="flex flex-col md:flex-row items-center py-[20rem] px-20">
      <Image
        src={about}
        alt="Mulher com notebook"
        width={304.73}
        height={303}
        className="w-1/2 md:w-1/3 m-auto"
      />
      <div className="md:w-2/3 md:ml-4 text-center md:text-left">
        <h2 className="md:text-4xl font-black text-incentive-blue text-xl">
          Sobre nós
        </h2>
        <GradientButton onClick={() => alert("Botão clicado!")}>
          Sobre nós
        </GradientButton>
        <p className="mt-4 max-w-[400px]">
          A <span className="font-bold">Incentive Plus</span> nasceu do propósito
          de trazer diversas <b>soluções com o foco no crescimento e desenvolvimento</b>
          
          de empresas e colaboradores, pois sabemos que ambos precisam um do outro
          para crescer e que cada um tem necessidades individuais para isso.
        </p>
      </div>
    </div>
  );
}
