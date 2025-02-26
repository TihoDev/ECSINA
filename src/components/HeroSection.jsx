import React from "react";
import Button from "./UI/Button";
import BaseIcon from "./icon/BaseIcon";
import Border from "./UI/Border";
import Tag from "./UI/Tag";

const HeroSection = () => {
  return (
    <div className="relative bg-section-background  h-[650px] rounded-bl-[80px] rounded-br-[80px] lg:rounded-bl-[300px] lg:rounded-br-[300px] shadow-hero-section">
      <div className="  container  grid grid-cols-12  mt-24 ">
        <div className=" col-span-12 lg:col-span-5 flex flex-col items-start gap-y-8">
          <h2 className=" text-xs lg:text-5xl text-title font-extrabold leading-20  mx-auto ">
            با اکسین، اسناد تجاری را مثل حرفه‌ای‌ها بساز!
          </h2>

          <p className="  hidden lg:block text-2xl text-description font-semibold leading-9">
            قالب‌های آماده، راهنمای کامل، همه‌چی اینجاست تا کارت سریع و بی‌دردسر
            پیش بره!
          </p>
          <div className="hidden lg:block">
            <Button text="رایگان دانلود کن" />
          </div>
        </div>
        <div className=" col-span-12 lg:col-span-7 place-items-center lg:place-items-end  ">
          <div>
            <BaseIcon
              className="hidden lg:block"
              id="ExinIcon2"
              disableGradient={true}
              size={390}
              fillColor="#3E243C"
            />
            <BaseIcon
              className="block lg:hidden mt-15"
              id="ExinIcon2"
              disableGradient={true}
              size={190}
              fillColor="#3E243C"
            />
          </div>

          <div className="hidden lg:block ">
            <div className="absolute left-1/20 -translate-x-1/12 -top-[20%] ">
              <Border size={670} />
            </div>
            <div className="absolute  left-1/20 -translate-x-1/8 -top-[26%] ">
              <Border size={750} />
            </div>
          </div>
          <div className=" lg:hidden">
            <div className="absolute left-1/2 -translate-x-1/2 top-[10%]">
              <Border size={350} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[6%]">
              <Border size={400} />
            </div>
          </div>

          <div className=" block">
            <div className="absolute left-1/10 translate">
              <Tag iconId="CrossEyesLaugh" text="رایگان!" />
            </div>
            {/* <div className="absolute">
              <Tag iconId="Download" text="قالب های آماده" />
            </div>
            <div className="absolute">
              <Tag iconId="lamp" text="الهام بگیر و اجرا کن" />
            </div>
            <div className="absolute">
              <Tag iconId="Grow" text="" />
            </div> */}
          </div>
          <div className="lg:hidden mt-28 flex flex-col items-center gap-y-4">
            <p className=" text-[10px] font-normal leading-3 lg:text-2xl text-description lg:font-semibold lg:leading-9">
              قالب‌های آماده، راهنمای کامل، همه‌چی اینجاست تا کارت سریع و
              بی‌دردسر پیش بره!
            </p>
            <Button text="رایگان دانلود کن" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
