import Image from "next/image";
import GradientUnderline from "../Gradient/GradientUnderline";
import womanIndex from "@/../public/business-finance-employment-female-successful-entrepreneurs-concept-confident-smiling-asian-businesswoman-office-worker-white-suit-glasses-using-laptop-help-clients 1.png";

export default function SobreEmpresa() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-center pt-20">
      <div className="md:w-1/2 flex justify-center mb-4 md:mb-0 md:pl-20">
        <Image
          src={womanIndex}
          alt="Mulher com notebook"
          width={400}
          height={400}
          className="w-[300px]"
        />
      </div>

      <div className="md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-black text-incentive-blue text-center md:text-left ">
          Uma empresa<br className="pb-12"/>
          que ajuda a sua<br />
          a encontrar o<br />
          <GradientUnderline>sucesso!</GradientUnderline>
        </h1>
      </div>
    </div>
  );
}
