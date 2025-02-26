import BaseIcon from "./icon/BaseIcon";
// bg-gradient-to-bl from-[#FEF1FD] to-[#FFFFFF]
function Navbar() {
  return (
    <div className="container bg-section-background relative h-[90px] rounded-b-[81px] shadow-2xl flex justify-between items-center px-10">
      <BaseIcon id="Grow" size={21} disableGradient={true} fillColor="#000" />
      <nav className="w-[171px] h-[556px] px-7 bg-red-300 flex flex-col space-y-5 fixed top-0 right-0 font-semibold text-[10px] rounded-bl-[50px] transform translate-x-0 transition-all">
        <span className="text-left mt-5 text-lg">X</span>
        <ul className="space-y-4">
          <li>محصولات ما</li>
          <li>صفحه اصلی</li>
          <li>درباره ما</li>
          <li>تماس با ما</li>
        </ul>
      </nav>
      <BaseIcon
        id="ExinIcon2"
        disableGradient={true}
        size={35}
        fillColor="#3E243C"
      />
    </div>
  );
}

export default Navbar;
