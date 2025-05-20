import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/assets/icons/Logo.svg";

import Youtube from "../../../public/assets/icons/Youtube.svg";
import Telegram from "../../../public/assets/icons/Telegram.svg";
import Whatsapp from "../../../public/assets/icons/Whatsapp.svg";
import Instagram from "../../../public/assets/icons/Instagram.svg";
import Linkedln from "../../../public/assets/icons/Linkedln.svg";

const icons = [
  { id: 1, name: Youtube, href: "/" },
  { id: 2, name: Telegram, href: "/" },
  { id: 3, name: Whatsapp, href: "/" },
  { id: 4, name: Instagram, href: "/" },
  { id: 5, name: Linkedln, href: "/" },
];

const navigationLinks = [
  { id: 1, title: "صفحه اصلی", href: "/" },
  { id: 2, title: "محصولات", href: "/products" },
  { id: 3, title: " محصولات", href: "/about" },
  { id: 4, title: "تماس با ما", href: "/contact" },
];

const categories = [
  { id: 1, title: "بوم ناب", href: "/" },
  { id: 2, title: "بوم کسب و کار", href: "/" },
  { id: 3, title: "پروپوزال ها", href: "/" },
  { id: 4, title: "بیزینس پلن", href: "/" },
  { id: 5, title: "بیزینس مدل", href: "/" },
];

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 right-0  border-t border-secondary-17">
      {/* Top */}
      <div className="container mt-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 mb-4 md:mb-10 ">
          <Image src={Logo} alt="Logo" />
          <span className="w-[1px]  h-16 bg-secondary-13"></span>
          <div className="text-black flex flex-col items-start gap-1">
            <span className="text-xl font-bold">اکسینا</span>
            <span className="text-xs font-[100]">همراهـــــــــــــیِ نوین</span>
            <span className="text-sm font-light">اسناد تجاری</span>
          </div>
        </Link>

        {/* Other */}
        <div className="flex items-start gap-10 md:gap-20 mb-8 md:mb-16">
          <div className="max-w-md flex flex-col justify-between ">
            <p className="text-xs leading-6 font-medium text-secondary-18">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            </p>
            {/* Icons */}
            <div className="flex items-center gap-2 mt-5 md:mt-8">
              {icons.map((icon) => (
                <Link key={icon.id} href={icon.href} className="flex items-center justify-center  p-2 border-1 border-primary-7 rounded-sm">
                  <Image src={icon.name} alt="" width={26} height={26} />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-2 items-start md:gap-10 -mt-22 md:mt-0">
            <div>
              <p className=" text-base md:text-xl font-medium text-secondary-18 mb-2 text-nowrap">دسترسی سریع</p>
              <ul className="flex flex-col items-start gap-2">
                {navigationLinks.map((link) => (
                  <Link key={link.id} href={link.href} className="text-xs md:text-base text-secondary-18 font-medium transition-all duration-300 hover:text-primary-6">
                    {link.title}
                  </Link>
                ))}
              </ul>
            </div>
            <div>
              <p className=" text-base md:text-xl font-medium text-secondary-18 mb-2 text-nowrap">دسته بندی محصولات</p>
              <ul className="flex flex-col items-start gap-2">
                {categories.map((link) => (
                  <Link key={link.id} href={link.href} className="text-xs md:text-base text-secondary-18 font-medium transition-all duration-300 hover:text-primary-6">
                    {link.title}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Boottm */}
      <div className="bg-primary-7 rounded-t-sm md:rounded-t-2xl w-full flex items-center justify-center py-3 md:py-5">
        <p className="font-medium text-xs md:text-base text-white">تمامی حقوق مادی و معنوی برای شرکت اکسینا محفوظ است.</p>
      </div>
    </footer>
  );
};

export default Footer;
