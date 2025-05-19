import Image from "next/image";
import ArrowRight from "../../../public/assets/icons/ArrowRight.svg";
import Link from "next/link";
const ScrollToTopButton = () => {
  return (
    <Link href="/">
      <button className="rounded-xl shadow-icon gradient-stroke2 cursor-pointer p-2 hover:scale-105 transition-transform duration-300">
        <Image
          src={ArrowRight}
          alt=""
          width={50}
          height={50}
          className="-rotate-45 hidden md:block"
        />
        <Image
          src={ArrowRight}
          alt=""
          width={30}
          height={30}
          className="-rotate-45 block md:hidden"
        />
      </button>
    </Link>
  );
};

export default ScrollToTopButton;
