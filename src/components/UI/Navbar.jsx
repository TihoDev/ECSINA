import React from "react";
import MobileMenu from "./MobileMenu";
import Button from "./Button";
import Link from "next/link";
import Image from "next/image";

import Arrow from "../../../public/assets/icons/Arrow.svg";
import Logo from "../../../public/assets/icons/Logo.svg";

const navigationLinks = [
  { id: 1, title: "صفحه اصلی", href: "/" },
  { id: 2, title: "محصولات ما", href: "/products" },
  { id: 3, title: "درباره ی ما", href: "/about" },
  { id: 4, title: "تماس با ما", href: "/contact" },
];

const Navbar = () => {
  return (
    <header className="container mt-4 md:mt-10">
      {/* Desktop */}
      <nav className="hidden md:flex justify-between items-center">
        <div className=" flex items-center gap-3 xl:gap-8">
          {/* Logo and text */}
          <Link href="/" className="flex items-center gap-2 ">
            <Image src={Logo} alt="Logo" />
            <span className="w-[1px]  h-16 bg-secondary-13"></span>
            <div className="text-black flex flex-col items-start gap-1">
              <span className="text-xl font-bold">اکسینا</span>
              <span className="text-xs font-[100]">همراهـــــــــــــیِ نوین</span>
              <span className="text-sm font-light">اسناد تجاری</span>
            </div>
          </Link>
          {/*  links*/}
          <ul className="flex items-center gap-2 lg:gap-8">
            {navigationLinks.map((link) => (
              <li key={link.id}>
                <Link className={` text-black text-nowrap  lg:text-2xl font-medium hover:text-primary-7 transition-all duration-100`} href={link.href}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/auth">
          <Button icon={Arrow}>ثبت نام</Button>
        </Link>
      </nav>
      {/* Mobile */}
      <div className="block md:hidden">
        <MobileMenu links={navigationLinks} />
      </div>
    </header>
  );
};

export default Navbar;
