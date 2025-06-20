"use client";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={openMenu} className="cursor-pointer">
            <GiHamburgerMenu size={33} />
          </button>

          <Link href="/about">
            <Button icon={"/assets/icons/Arrow.svg"}>ثبت نام</Button>
          </Link>
        </div>

        <Link href="/">
          <Image width={44} height={44} src={"/assets/icons/Logo.svg"} alt="Logo" />
        </Link>
      </div>

      {/* Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-[3px] z-40 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={closeMenu} />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-48 bg-white shadow-lg z-50 transform transition-transform duration-300 rounded-bl-[50px] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div>
          {/* Close Icon */}
          <button onClick={closeMenu} className="cursor-pointer mt-8 mr-[75%]">
            <AiOutlineClose size={25} fill="#0029BC" />
          </button>

          {/* Menus */}

          <ul className="p-6 flex flex-col items-start gap-6">
            {links.map((link) => (
              <li key={link.id} className="text-black text-sm font-semibold">
                <Link href={link.href} onClick={closeMenu}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
