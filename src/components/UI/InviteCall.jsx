import Image from "next/image";
import Arrow from "../../../public/assets/icons/ArrowRight.svg";
import NotFound from "../../../public/assets/images/NotFound.png";
const InviteCall = ({ card, index }) => {
  return (
    <div
      className={`flex flex-col bg-red-200 gap-0.5 md:gap-3 rounded-2xl pb-2 pt-4 px-2 md:pt-10 md:pb-4 md:px-6 gradient-invite-cart shadow-invite-cart ${
        index >= 1 ? "md:min-h-[360px]" : ""
      }`}
    >
      {/* Heder */}
      <div className="flex items-start justify-between min-h-5 ">
        <p className="text-primary-15 font-semibold text-base md:text-xl">
          {card.title}
        </p>
        <Image src={Arrow} alt="" width={36} height={36} />
      </div>

      {/* Body */}
      <div
        className={
          index >= 1
            ? "md:flex md:flex-col md:gap-2"
            : "lg:flex gap-5 justify-between"
        }
      >
        <p
          className={`text-black text-xs md:text-base font-normal text-right leading-5 mb-2 md:mb-0 md:min-h-20 lg:leading-7 ${
            index === 0 ? "md:max-w-96" : ""
          }`}
        >
          {card.description}
        </p>
        <Image
          src={NotFound}
          alt=""
          width={550}
          height={150}
          className="flex md:hidden h-full "
        />
        <Image
          src={NotFound}
          alt=""
          width={750}
          height={450}
          className="hidden md:flex h-full "
        />
      </div>
    </div>
  );
};

export default InviteCall;
