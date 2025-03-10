import React from "react";
import Button from "./UI/Button";

const BelowMainPageBanner = () => {
  return (
    <section className="flex flex-col items-center gap-y-3 lg:gap-y-10 mt-[90px] lg:mt-[180px]">
      <p className=" text-title text-xs lg:text-2xl font-bold text-center leading-9">
      اکسین برای تأمین منابع انسانی (HR) و بخش تحقیق و توسعه (R&D)  با تیم استارپی ™️IR همکاری دارد.<br />{" "}
        {" "}
      </p>
      <Button text={"آشنایی بیشتر"} />
    </section>
  );
};

export default BelowMainPageBanner;
