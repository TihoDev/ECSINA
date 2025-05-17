import Button from "../UI/Button";

import Image from "next/image";
import Arrow from "../../../public/assets/icons/Arrow.svg";
import Logo from "../../../public/assets/icons/MainLogo.svg";
import Star from "../../../public/assets/icons/Star.svg";
import Growth from "../../../public/assets/icons/growth.svg";

const stars = [
  {
    id: 1,
    icon: Star,
    alt: "Star",
    moblieSize: 20,
    desktopSize: 30,
    className: "absolute -top-1/6 right-9/20  md:-top-5/12 md:right-1/8",
  },
  {
    id: 2,
    icon: Star,
    alt: "Star",
    moblieSize: 20,
    desktopSize: 30,
    className: "absolute top-1/4 -right-1/6 md:top-1/8 md:-right-1/8",
  },
  {
    id: 3,
    icon: Star,
    alt: "Star",
    moblieSize: 20,
    desktopSize: 30,
    className: "absolute top-1/4 -left-1/6  md:top-1/8 md:-left-1/8",
  },
  {
    id: 4,
    icon: Star,
    alt: "Star",
    moblieSize: 20,
    desktopSize: 30,
    className: "absolute -bottom-1/24 left-1/6 md:bottom-1/12 md:left-1/4",
  },
  {
    id: 5,
    icon: Star,
    alt: "Star",
    moblieSize: 20,
    desktopSize: 30,
    className: "absolute bottom-1/24 right-1/6 md:bottom-1/24 md:right-1/4",
  },
];

const Sticker = ({ text = "", className = "", icon = "" }) => {
  return (
    <div
      className={`shadow-2xl px-4 py-2.5 rounded-sm  inline-flex items-center justify-center ${className}`}
    >
      <span className="text-secondary-19 text-xs  md:text-xl font-semibold">
        {text}

        {icon && <Image alt="" src={icon} width={30} height={30} />}
      </span>
    </div>
  );
};

const HeroBanner = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <h2 className="text-lg  md:text-5xl text-black font-semibold text-center">
          با اکسینا، اسناد تجاری را مثل حرفه‌ای‌ها بساز!
        </h2>
        <h6 className="text-base md:text-3xl font-normal text-black  md:max-w-[60%] text-center">
          قالب‌های آماده، راهنمای کامل، همه‌چی اینجاست تا کارت سریع و بی‌دردسر
          پیش بره!
        </h6>

        <Button icon={Arrow}>رایگان دانلود کن</Button>
      </div>

      <div className=" relative flex justify-evenly mt-8 md:mt-20">
        <Sticker text="قالب های آماده" className={"rotate-20 "} />
        <Sticker text="الهام بگیر و اجرا کن" className={"rotate-10"} />
        <Sticker icon={Growth} className={""} />
        <Sticker text="رایگان!" className={"-rotate-20"} />
      </div>

      <div className="place-items-center mt-10">
        {/* LOGO Desktop */}
        <div className="relative hidden md:block">
          <Image src={Logo} alt="Main Logo" width={600} height={550} />

          {stars.map((star) => (
            <Image
              key={star.id}
              src={star.icon}
              alt={star.alt}
              width={star.desktopSize}
              height={star.desktopSize}
              className={star.className}
            />
          ))}
        </div>
        {/* LOGO Mobile */}

        <div className="relative block md:hidden">
          <Image src={Logo} alt="Main Logo" width={250} height={200} />

          {stars.map((star) => (
            <Image
              key={star.id}
              src={star.icon}
              alt={star.alt}
              width={star.moblieSize}
              height={star.moblieSize}
              className={star.className}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
