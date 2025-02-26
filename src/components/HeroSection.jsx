import React from "react";
import Button from "./UI/Button";
import BaseIcon from "./icon/BaseIcon";
import Border from "./UI/Border";
import Tag from "./UI/Tag";

const HeroSection = () => {
  return (
    <div className="relative bg-section-background  h-[650px] rounded-bl-[300px] rounded-br-[300px] shadow-hero-section">
      <div className="container  grid grid-cols-12  mt-24 ">
        <div className="col-span-5 flex flex-col items-start gap-y-8">
          <h2 className="text-5xl text-title font-extrabold ">
            با اکسین، اسناد تجاری را
            <br /> مثل حرفه‌ای‌ها بساز!
          </h2>

          <p className="text-2xl text-description font-semibold">
            قالب‌های آماده، راهنمای کامل، همه‌چی <br /> اینجاست تا کارت سریع و
            بی‌دردسر پیش بره!
          </p>

          <Button text="رایگان دانلود کن" />
        </div>
        <div className="col-span-7 place-items-end  ">
          <div>
            <BaseIcon
              id="ExinIcon2"
              disableGradient={true}
              size={390}
              fillColor="#3E243C"
            />
          </div>
          <div className="absolute -top-30 left-40">
            <Border size={670} />
          </div>
          <div className="absolute -top-40 left-30">
            <Border size={750} />
          </div>
          <div className="absolute -top-25 left-70">
            <Tag iconId="CrossEyesLaugh" text="رایگان!" />
          </div>
          <div className="absolute top-30 left-170">
            <Tag iconId="Download" text="قالب های آماده" />
          </div>
          <div className="absolute top-110 left-125">
            <Tag iconId="lamp" text="الهام بگیر و اجرا کن" />
          </div>
          <div className="absolute top-70 left-55">
            <Tag iconId="Grow" text="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
