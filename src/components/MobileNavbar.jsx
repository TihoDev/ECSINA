"use client";

import { useRef } from "react";
import BaseIcon from "./icon/BaseIcon";
import Link from "next/link";

const MobileNavbar = ({ navigationLinks }) => {
  const menu = useRef();

  const handleToggleMenu = (toggle) => {
    const currentMenu = menu.current;
    if (toggle === "open") {
      currentMenu.classList.remove("translate-x-[100%]");
      document.body.classList.add("overflow-y-hidden");
    } else {
      currentMenu.classList.add("translate-x-[100%]");
      document.body.classList.remove("overflow-y-hidden");
    }
  };

  return (
    <>
      <div className="bg-section-background h-[90px] rounded-b-[81px] shadow-gradient shadow-hero-section flex justify-between items-center px-12 mb-2">
        <BaseIcon
          onClick={() => handleToggleMenu("open")}
          id="Burger"
          size={21}
          disableGradient={true}
          fillColor="#2a2a2a"
          className="cursor-pointer"
        />

        <BaseIcon
          id="ExinIcon2"
          disableGradient={true}
          size={35}
          fillColor="#3E243C"
        />
      </div>
      <div>
        <ul
          className="fixed translate-x-[100%] bg-gradient-to-r from-[#FFFFFF] to-[#FEF1FD] top-0 right-0 pt-8 px-6 sm:px-7 lg:pr-0 ease-in duration-200 w-2/5 h-full shadow-xl rounded-bl-[50px] [&>li]:cursor-pointer z-50 font-semibold"
          ref={menu}
        >
          <li className="flex justify-end !cursor-auto">
            <button
              onClick={() => handleToggleMenu("close")}
              className="cursor-pointer p-1"
            >
              <BaseIcon
                id="Close"
                disableGradient={true}
                size={18}
                fillColor="#3E243C"
                className="md:!w-5 md:!h-5"
              />
            </button>
          </li>
          <ul className="mt-12 space-y-6 text-title">
          {navigationLinks.map((item) => (
            <li
            key={item.id}
            className="transition-all text-xs sm:text-sm md:text-[15px] py-2"
            >
              <Link href={item.href} className="w-full py-[9px] px-2 sm:pr-3 sm:pl-24 hover:bg-gradient-to-r hover:from-[#3E243C] to-[#A45F9E] hover:text-white rounded-md">{item.label}</Link>
            </li>
          ))}
          </ul>
        </ul>
      </div>
    </>
  );
};

export default MobileNavbar;
