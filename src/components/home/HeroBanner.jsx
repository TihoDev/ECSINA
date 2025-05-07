import Button from "../UI/Button";

import Arrow from "../../../public/assets/icons/Arrow.svg";

const HeroBanner = () => {
  return (
    <section>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-5xl text-black font-semibold">
          با اکسینا، اسناد تجاری را مثل حرفه‌ای‌ها بساز!
        </h2>
        <h6 className="text-3xl  font-normal text-black max-w-[60%] text-center">
          قالب‌های آماده، راهنمای کامل، همه‌چی اینجاست تا کارت سریع و بی‌دردسر
          پیش بره!
        </h6>

        <Button icon={Arrow}>رایگان دانلود کن</Button>
      </div>
    </section>
  );
};

export default HeroBanner;
