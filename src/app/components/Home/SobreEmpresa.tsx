import Image from "next/image";
import GradientUnderline from "../Gradient/GradientUnderline";
import womanIndex from "@/../public/business-finance-employment-female-successful-entrepreneurs-concept-confident-smiling-asian-businesswoman-office-worker-white-suit-glasses-using-laptop-help-clients 1.png";

export default function SobreEmpresa() {
  return (
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
  );
}
