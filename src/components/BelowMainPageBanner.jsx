import React from "react";
import Button from "./UI/Button";

export const BelowMainPageBanner = () => {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <p className=" text-title text-2xl font-bold text-center ">
        اکسین به عنوان دستیاری حرفه ای همیشه همراه کسب و کارتان شما است .<br />{" "}
        دغدغه ی ما هموار کردن مسیر شما است.{" "}
      </p>
      <Button text={"آشنایی بیشتر"} />
    </div>
  );
};
