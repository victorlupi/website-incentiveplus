import Image from "next/image";
import person from "@/../public/icons/user-person.png";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center gap-10 px-8 md:px-0 py-8 pb-[10rem]">
      {/* Card 1 */}
      <div className="bg-gray-100 w-full md:w-1/4 rounded-lg flex mb-20 md:mb-0">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] rounded-l-lg flex items-center justify-center"></div>
        <div className="p-4 w-full"> 
          <Image src='/images/simbolo.png' width={50} height={50} alt="citação" className="shadow-2xl" />
          <p className="my-4 text-left text-incentive-blue"> 
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-start items-end absolute pt-10 "> 
            <div className="rounded-full p-4 bg-white shadow-2xl -mt-12">
              <Image
                src={person}
                width={50}
                height={50}
                alt="person"
                className="rounded-full shadow-2xl"
              />
            </div>
            <span className="ml-4 text-incentive-blue font-semibold">Nome do Usuário</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 w-full md:w-1/4 rounded-lg flex mb-20 md:mb-0">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] rounded-l-lg flex items-center justify-center"></div>
        <div className="p-4 w-full"> 
          <Image src='/images/simbolo.png' width={50} height={50} alt="citação" className="shadow-2xl" />
          <p className="my-4 text-left text-incentive-blue"> 
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-start items-end absolute pt-10 "> 
            <div className="rounded-full p-4 bg-white shadow-2xl -mt-12">
              <Image
                src={person}
                width={50}
                height={50}
                alt="person"
                className="rounded-full shadow-2xl"
              />
            </div>
            <span className="ml-4 text-incentive-blue font-semibold">Nome do Usuário</span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 w-full md:w-1/4 rounded-lg flex mb-20 md:mb-0">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold w-[10px] rounded-l-lg flex items-center justify-center"></div>
        <div className="p-4 w-full"> 
          <Image src='/images/simbolo.png' width={50} height={50} alt="citação" className="shadow-2xl" />
          <p className="my-4 text-left text-incentive-blue"> 
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-start items-end absolute pt-10 0"> 
            <div className="rounded-full p-4 bg-white shadow-2xl -mt-12">
              <Image
                src={person}
                width={50}
                height={50}
                alt="person"
                className="rounded-full shadow-2xl"
              />
            </div>
            <span className="ml-4 text-incentive-blue font-semibold">Nome do Usuário</span>
          </div>
        </div>
      </div>
    </div>
  );
}
