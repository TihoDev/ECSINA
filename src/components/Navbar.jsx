import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const navigationLinks = [
  { id: 1, label: "محصولات ما", href: "/products" },
  { id: 2, label: "صفحه اصلی", href: "/" },
  { id: 3, label: "درباره ما", href: "/" },
  { id: 4, label: "تماس با ما", href: "/" },
];

function Navbar() {
  return (
    <>
      <div className="block lg:hidden relative">
        <MobileNavbar navigationLinks={navigationLinks} />
      </div>
      <nav className="hidden lg:flex justify-center lg:justify-start">
        {/* Desctop navbar */}
        <ul className="text-lg border-2 border-[#3E243C] gap-x-10 py-6 px-12 flex justify-around items-center rounded-2xl [&>li]:cursor-pointer">
          {navigationLinks.map((item) => (
            <li className="text-title" key={item.id}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
