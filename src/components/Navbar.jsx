import MobileNavbar from "./MobileNavbar";

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
          <li>محصولات ما</li>
          <li>صفحه اصلی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
