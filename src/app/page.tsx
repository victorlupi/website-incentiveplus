import GradientServices from "./components/Gradient/GradientServices";
import Card from "./components/Home/Depoimento/Card";

import Depoimentos from "./components/Home/Depoimentos";
import NossosServicos from "./components/Home/NossosServicos";
import SobreEmpresa from "./components/Home/SobreEmpresa";
import SobreNos from "./components/Home/SobreNos";

export default function Home() {
  return (
    <main>
      <SobreEmpresa></SobreEmpresa>
      <div className="flex justify-center items-center">
        <GradientServices>asdasd</GradientServices>
      </div>

      <SobreNos />
      <Depoimentos />
      <Card />
      <NossosServicos />
    </main>
  );
}
