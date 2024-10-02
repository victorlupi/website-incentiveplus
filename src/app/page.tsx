import GradientServices from "./components/Gradient/GradientServices";
import Card from "./components/Home/Depoimento/Card";

import Depoimentos from "./components/Home/Depoimentos";
import NossosServicos from "./components/Home/NossosServicos";
import SobreEmpresa from "./components/Home/SobreEmpresa";
import SobreNos from "./components/Home/SobreNos";
import Lifes from "./components/Lifes";
import BlogSession from "./components/BlogSession";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import Carrossel from "./components/Carrousel";
import NossosServicos2 from "./components/Home/NossosServicos2";

export default function Home() {
  return (
    <main>
      
      <Carrossel />
       <SobreEmpresa></SobreEmpresa>
      {/* <div className="flex justify-center items-center">
        <GradientServices>asdasd</GradientServices>
      </div> */}
      <NossosServicos2 />
     <SobreNos />
       <Lifes />
      <Depoimentos />
      <Card />
      <NossosServicos />
      <BlogSession />
      <ContactSection />
      <Footer /> 
    </main>
  );
}
