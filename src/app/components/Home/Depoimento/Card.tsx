import Image from "next/image";
import person from "@/../public/icons/user-person.png";

export default function Card() {
  return (
    <div className="flex flex-wrap justify-center">
      {/* Card 1 */}
      <div className="bg-gray-100 w-full md:w-1/3 p-4 m-2 rounded-lg flex">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold p-4 w-[20px] rounded-l-lg flex items-center justify-center">
        
        </div>
        <div className="p-4 w-2/3">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-center">
            <Image
              src={person}
              width={50}
              height={50}
              alt="person"
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-gray-100 w-full md:w-1/3 p-4 m-2 rounded-lg flex">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold p-4 w-[1px] rounded-l-lg flex items-center justify-center">
         
        </div>
        <div className="p-4 w-2/3">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-center">
            <Image
              src={person}
              width={50}
              height={50}
              alt="person"
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-gray-100 w-full md:w-1/3 p-4 m-2 rounded-lg flex">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold p-4 w-[1px] h-full rounded-l-lg flex items-center justify-center">
       
        </div>
        <div className="p-4 w-2/3">
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
            purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
            ghu.
          </p>
          <div className="flex justify-center">
            <Image
              src={person}
              width={50}
              height={50}
              alt="person"
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
