"use client";
import Image from "next/image";
import Link from "next/link";

const ScrollToTopButton = () => {
  return (
    <Link href={"#header"}>
<<<<<<< HEAD
      <button className="rounded-xl shadow-icon gradient-stroke2 cursor-pointer p-2 hover:scale-105 transition-transform duration-300">
        <Image src={"/assets/icons/ArrowRight.svg"} alt="" width={50} height={50} className="-rotate-45 hidden md:block" />
=======
      <button className="rounded-xl relative shadow-icon gradient-stroke2 cursor-pointer p-5 md:p-6 lg:p-8 hover:scale-105 transition-transform duration-300">
        <Image
          src={"assets/icons/ArrowRight.svg"}
          alt=""
          fill
          className="-rotate-45 "
        />
>>>>>>> dev
      </button>
    </Link>
  );
};

export default ScrollToTopButton;
