import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoClose } from "react-icons/io5";

const SignupPage = () => {
  return (
    <div className="flex justify-center items-center  w-screen  h-screen relative">
      {/* <Image alt="" src={"/assets/images/bg-vector.svg"} fill className="" /> */}
      <section className="w-2/3 h-4/5 blue_shadow rounded-xl p-4 flex flex-col items-center justify-start ">
        <div className="w-full flex justify-between items-center ">
          <div className="relative size-7 md:size-21">
            <Image src={"/assets/icons/Logo.svg"} alt="Logo" fill />
          </div>
          <div className="hidden md:flex md:flex-col">
            <h1 className="text-5xl">سلام!</h1>
            <p>
              به
              <Link className="p-0.5" href={"/"}>
                اکسینا
              </Link>
              خوش آمدید.
            </p>
          </div>
          <Link href={"/"}>
            <IoClose size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SignupPage;
