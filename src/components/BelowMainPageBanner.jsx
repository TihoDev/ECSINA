import React from "react";
import Button from "./UI/Button";

const BelowMainPageBanner = () => {
  return (
    <div className="flex flex-col items-center gap-y-3 lg:gap-y-10">
      <p className=" text-title text-xs lg:text-2xl font-bold text-center leading-9">
        اکسین به عنوان دستیاری حرفه ای همیشه همراه کسب و کارتان شما است .<br />{" "}
        دغدغه ی ما هموار کردن مسیر شما است.{" "}
      </p>
      <Button text={"آشنایی بیشتر"} />
    </div>
  );
};

export default BelowMainPageBanner;
