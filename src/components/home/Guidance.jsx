import Button from "../UI/Button";
import Image from "next/image";

import Arrow from "../../../public/assets/icons/Arrow.svg";
import Arrow2 from "../../../public/assets/icons/Arrow2.svg";
import Wing from "../../../public/assets/icons/Wing.svg";
import Subtract from "../../../public/assets/icons/Subtract.svg";
import ScrollToTopButton from "../UI/ScrollToTopButton";

const Guidance = () => {
  return (
    <div className="mt-16 md:mt-40  py-5 md:py-12 relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={Subtract}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className=" container flex items-center justify-center flex-col gap-3 md:gap-8 ">
        <p className="text-secondary-20 text-base font-medium md:text-4xl mt-10">
          قالب مورد نظرت رو پیدا نکردی؟{" "}
        </p>
        <p className=" text-xs md:text-2xl font-normal text-black text-center max-w-5xl  mb-4">
          اگر هیچ‌کدوم از قالب‌ها پاسخگوی نیازت نبود، می‌تونی از طریق راه‌های
          ارتباطی با ما در تماس باشی — یا با ثبت‌نام در اکسینا، یک داشبورد شخصی
          داشته باشی که از اونجا به‌راحتی با پشتیبانی ما ارتباط بگیری.
        </p>
        {/* Buttons */}
        <div className="flex items-center gap-6 mb-8">
          <Button icon={Arrow}>ارتباط با ما</Button>
          <Button icon={Arrow} variant="outline">
            ثبت نام
          </Button>
        </div>
      </div>

      {/* Wing */}
      <div className="absolute w-20 h-20 md:w-28 md:h-28 flex items-center justify-center  p-1 md:p-2 bg-white rounded-full -top-1/6 md:-top-1/5  right-1/16">
        <Image src={Wing} alt="" fill />
      </div>

      {/* Arrow */}
      <div className="absolute w-32 h-32  md:w-54 md:h-54 left-0 -bottom-1/5 md:-bottom-1/3">
        <Image src={Arrow2} fill alt="" />
      </div>

      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Guidance;
