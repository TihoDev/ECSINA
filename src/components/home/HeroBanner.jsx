import Button from "../UI/Button";

import Arrow from "../../../public/assets/icons/Arrow.svg";

const HeroBanner = () => {
  return (
    <section>
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

      <div></div>
    </section>
  );
};

export default HeroBanner;
