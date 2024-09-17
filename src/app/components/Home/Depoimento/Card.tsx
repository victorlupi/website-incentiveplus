import Image from "next/image";
import person from "@/../public/icons/user-person.png";

export default function Card() {
  return (
    <div className="flex flex-wrap ">
      {/* Depoimento 1 */}
      <div className="bg-gray-100 w-full">
        <div className="bg-gradient-to-b from-[#0174b9] via-[#0ddfaf] to-[#c1f163] text-white font-bold p-4 w-2"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Mauris sit mattis platea proin
          purus scelerisque. Commodo dictum fermentu massa mus velit amet sit
          ghu.
        </p>

        <div className="rounded-full shadow-2xl flex">
          <Image
            src={person}
            width={50}
            height={50}
            alt="person"
            className="rounded-full flex w-auto m-0"
          />
        </div>
      </div>
    </div>
  );
}
