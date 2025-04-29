"use client";

import { useRef, useState } from "react";
import BaseIcon from "./icon/BaseIcon";
import Link from "next/link";

const MobileNavbar = ({ navigationLinks, currentPath, isActiveLink }) => {
  const menu = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (toggle) => {
    const currentMenu = menu.current;
    if (toggle === "open") {
      currentMenu.classList.remove("translate-x-[100%]");
      setIsMenuOpen(true);
    } else {
      currentMenu.classList.add("translate-x-[100%]");
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <div className="  bg-section-background h-[90px] rounded-b-[81px] shadow-gradient shadow-hero-section flex justify-between items-center px-12 mb-2">
        <BaseIcon
          onClick={() => handleToggleMenu("open")}
          id="Burger"
          size={21}
          disableGradient={true}
          fillColor="#2a2a2a"
          className="cursor-pointer"
        />
        <Link href="/">
          <BaseIcon
            id="ExinIcon2"
            disableGradient={true}
            size={50}
            fillColor="#3E243C"
          />
        </Link>
      </div>
      <div>
        <ul
          className="fixed translate-x-[100%] bg-gradient-to-r from-[#FFFFFF] to-[#FEF1FD] top-0 right-0 pt-8 px-6 sm:px-7 lg:pr-0 ease-in duration-200 w-3/5 sm:w-2/5 h-full shadow-xl rounded-bl-[50px] [&>li]:cursor-pointer z-50 font-semibold"
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
          <ul className="mt-12 space-y-1 text-title z-20">
            {navigationLinks.map((item) => (
              <li
                key={item.id}
                className="transition-all text-xs sm:text-sm md:text-[15px] py-2"
              >
                <Link
                  href={item.href}
                  className={`w-full py-[9px] px-2 sm:pr-3 sm:pl-24 rounded-md transition-all duration-300 block ${
                    isActiveLink(item.href)
                      ? "bg-gradient-to-r from-[#3E243C] to-[#A45F9E] text-white"
                      : "hover:text-main-color-active"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
      </div>
      {isMenuOpen && (
        <div
          onClick={() => handleToggleMenu("close")}
          className="fixed top-0 left-0 w-screen h-screen bg-black/30 backdrop-blur-[3px] z-10"
        ></div>
      )}
    </>
  );
};

export default MobileNavbar;
