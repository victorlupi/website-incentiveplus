import Image from "next/image";
import person from "@/../public/icons/user-person.png";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {/* Card 1 */}
      <div className="bg-gray-100 w-full md:w-1/3 rounded-lg flex">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] rounded-l-lg flex items-center justify-center">
        
        </div>
        <div className="p-4 w-2/3">
        <Image src='/images/simbolo.png' width={50} height={50} alt="citação" className=" shadow-2xl" />
          <p className="mt-14">
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-start">
          <div className=" absolute bottom-20 rounded-full p-4 bg-white">
            <Image
              src={person}
              width={50}
              height={50}
              alt="person"
              className="rounded-full shadow-2xl"
            />
            </div>
            <span className="ml-2 text-black font-semibold">Nome do Usuário</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 w-full md:w-1/3  rounded-lg flex">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] rounded-l-lg flex items-center justify-center">
         
        </div>
        <div className="p-4 w-2/3">
        <Image src='/images/simbolo.png' width={50} height={50} alt="citação" className=" shadow-2xl" />
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-start">
            <div className="rounded-full p-4 bg-white">
            <Image
              src={person}
              width={50}
              height={50}
              alt="person"
              className="rounded-full shadow-2xl"
            />
           
            </div>
            <span className="ml-2 text-black font-semibold">Nome do Usuário</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 w-full md:w-1/3 rounded-lg flex">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] h-full rounded-l-lg flex items-center justify-center">
       
        </div>
        <div className="pl-4 w-2/3">
        <Image src='/images/simbolo.png' width={50} height={50} alt="citação" className=" shadow-2xl" />

          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-start">
          <div className="rounded-full p-4 bg-white">
            <Image
              src={person}
              width={50}
              height={50}
              alt="person"
              className="rounded-full shadow-2xl"
            />
            </div>
            <span className="ml-2 text-black font-semibold">Nome do Usuário</span>
          </div>
        </div>
      </div>
    </div>
  );
}
