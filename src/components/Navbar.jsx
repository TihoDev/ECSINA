"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar";

const navigationLinks = [
  { id: 1, label: "محصولات ما", href: "/products" },
  { id: 2, label: "صفحه اصلی", href: "/" },
  { id: 3, label: "درباره ما", href: "/about" },
  { id: 4, label: "تماس با ما", href: "/contact" },
];

function Navbar() {
  const pathname = usePathname();

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <div className="block lg:hidden relative">
        <MobileNavbar
          navigationLinks={navigationLinks}
          currentPath={pathname}
          isActiveLink={isActiveLink}
        />
      </div>
      <nav className="hidden lg:flex justify-center lg:justify-start">
        {/* Desctop navbar */}
        <ul className="text-lg border-2 border-[#3E243C] gap-x-10 py-4 px-12 flex justify-around items-center rounded-2xl [&>li]:cursor-pointer">
          {navigationLinks.map((item) => (
            <li
              key={item.id}
              className={`text-title transition-all duration-300 ${
                isActiveLink(item.href)
                  ? "bg-purple-gradient text-white px-4 py-2 rounded-full"
                  : "hover:text-main-color-active"
              }`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
