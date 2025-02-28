import React from "react";
import Button from "./UI/Button";
import BaseIcon from "./icon/BaseIcon";
import Border from "./UI/Border";
import Tag from "./UI/Tag";

const HeroSection = () => {
  return (
    <div
      className="relative bg-section-background h-[550px] lg:min-h-[750px] rounded-bl-[80px] rounded-br-[80px]
     lg:rounded-bl-[300px] lg:rounded-br-[300px] shadow-hero-section lg:mt-64"
    >
      <div className="container grid grid-cols-12 lg:mx-0">
        <div className="col-span-12 lg:col-span-5  flex flex-col items-start gap-y-8">
          <h2 className=" text-xs  lg:text-5xl text-title font-extrabold leading-20  mx-auto ">
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
        <div className=" col-span-12 place-items-center lg:col-span-6 ">
          <div className="lg:absolute  lg:left-1/8 xl:-translate-x-1/6 ">
            <BaseIcon
              className="visible lg:invisible mt-15 "
              id="ExinIcon2"
              disableGradient={true}
              size={190}
              fillColor="#3E243C"
            />
          </div>

          <div className="invisible lg:visible">
            <div className="absolute left-9/120 -translate-x-2/24 top-[3%] ">
              <Border size={520} />
            </div>
            <div className="absolute left-3/40 -translate-x-1/8 -top-[2%] ">
              <Border size={590} />
              <div className="invisible lg:visible ">
                <div className="absolute left-[15%] -top-[5%]">
                  <Tag iconId="CrossEyesLaugh" text="رایگان!" />
                </div>
                <div className="absolute left-[85%] top-[45%] ">
                  <Tag iconId="Download" text="قالب  آماده" />
                </div>
                <div className="absolute left-[51%] -bottom-[13%]">
                  <Tag iconId="lamp" text="الهام بگیر و اجرا کن" />
                </div>
                <div className="absolute left-[0%] top-[60%]">
                  <Tag iconId="Grow" text="" />
                </div>
              </div>
            </div>
            <div className="absolute left-8/120 translate-x-1/12 top-[13%] ">
              <BaseIcon
                className="hidden lg:block"
                id="ExinIcon2"
                disableGradient={true}
                size={390}
                fillColor="#3E243C"
              />
            </div>
          </div>

          <div className="lg:invisible">
            <div className="absolute left-1/2 -translate-x-1/2 top-[15%]">
              <Border size={300} />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-[10%]">
              <Border size={350} />
            </div>
          </div>

          <div className="lg:invisible">
            <div className="absolute -translate-y-7/2  -translate-x-5/2 ">
              <Tag size={26} iconId="CrossEyesLaugh" text="رایگان!" />
            </div>
            <div className="absolute -translate-y-4/2  translate-x-5/2 ">
              <Tag size={26} iconId="Download" text="قالب های آماده" />
            </div>
            <div className="absolute translate-y-2/5 translate-x-2/2   ">
              <Tag size={26} iconId="lamp" text="الهام بگیر و اجرا کن" />
            </div>
            <div className="absolute -translate-y-4/5 -translate-x-3/1  ">
              <Tag size={26} iconId="Grow" text="" />
            </div>
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
