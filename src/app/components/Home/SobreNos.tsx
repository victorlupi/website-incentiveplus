"use client";
import Image from "next/image";
import about from "@/../public/about.png";
import GradientButton from "../Gradient/GradientButton";

export default function SobreNos() {
  return (
    <div>
      <Image
        src={about}
        alt="Mulher com notebook"
        width={304.73}
        height={303}
        className="w-1/2 m-auto"
      />
      <h2 className="md:text-4xl font-black text-incentive-blue text-xl text-center">
        Sobre nós
      </h2>
      <GradientButton onClick={() => alert("Botão clicado!")}>
        Sobre nós
      </GradientButton>
      <p>
        A <span className="font-bold">Incentive Plus</span> nasceu do propósito
        de trazer diversas
        <span className="font-bold">
          soluções com o foco no crescimento e desenvolvimento
        </span>
        de empresas e colaboradores, pois sabemos que ambos precisam um do outro
        para crescer e que cada um tem necessidades individuais para isso.
      </p>
    </div>
  );
}
