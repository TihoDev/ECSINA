import React from "react";
import Button from "./UI/Button";

const BelowMainPageBanner = () => {
  return (
    <section className="flex flex-col items-center gap-y-3 lg:gap-y-10 mt-[90px] lg:mt-[180px]">
      <p className=" text-title text-xs px-12 lg:text-xl font-bold text-center ">
        اکسین برای تأمین منابع انسانی (HR) و بخش تحقیق و توسعه (R&D)  با تیم استارپی ™️IR همکاری دارد.<br />{" "}
          {" "}
      </p>
      <p className=" text-title text-xs px-12 lg:text-xl font-bold text-center ">
        اکسین به عنوان دستیاری حرفه ای همیشه همراه کسب و کارتان شما است . دغدغه ی ما هموار کردن مسیر شما است. 
      </p>
      <Button text={"آشنایی بیشتر"} />
    </section>
  );
};

export default BelowMainPageBanner;
