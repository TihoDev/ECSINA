import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

const navigationLinks = [
  { id: 1, label: "محصولات ما", href: "/" },
  { id: 2, label: "صفحه اصلی", href: "/" },
  { id: 3, label: "درباره ما", href: "/" },
  { id: 4, label: "تماس با ما", href: "/" },
];

function Navbar() {
  return (
    <>
      <div className="block md:hidden relative">
        <MobileNavbar />
      </div>
      <nav className="container hidden md:flex md:my-16 justify-center lg:justify-start">
        {" "}
        {/* Desctop navbar */}
        <ul className="text-lg border-2 border-[#3E243C] w-[550px] lg:w-[665px] h-16 lg:h-20 px-7 flex justify-around items-center rounded-2xl [&>li]:cursor-pointer">
          {navigationLinks.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
