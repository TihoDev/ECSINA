import React from "react";
import Link from "next/link";
import Button from "./UI/Button";
import BaseIcon from "./icon/BaseIcon";
import Border from "./UI/Border";
import Tag from "./UI/Tag";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section
      className=" lg:mx-auto bg-section-background  rounded-bl-[80px] rounded-br-[80px]
      lg:rounded-bl-[300px] lg:rounded-br-[300px] section-shadows"
    >
      <div className="lg:pt-12 lg:px-10 xl:px-40">
        <Navbar />
      </div>

      <div className="relative h-[560px] lg:min-h-[750px]">
        <div className="px-10 lg:px-10 xl:px-40 grid grid-cols-12 lg:mx-0">
          <div className="col-span-12 lg:col-span-5 lg:mt-28 flex flex-col items-start gap-y-8">
            <h2 className="w-full text-xl lg:text-5xl text-title font-extrabold leading-20 text-center lg:text-right">
              اکسین، همراهیِ نوین
            </h2>

            <p className=" hidden lg:block text-xl text-description font-semibold leading-9">
              اسناد تجاری در قالب های آماده با راهنمایی کامل همه چی اینجاست تا
              کارت سریع و بی دردسر پیش بره!
            </p>
            <div className="hidden lg:block ">
              <Link href="/products">
                <Button text="رایگان دانلود کن" />
              </Link>
            </div>
          </div>

          <div className="relative col-span-12 flex flex-col items-center justify-center  lg:col-span-7 mt-15">
            {/* Mobile icon */}
            <div className="">
              {/* lg:absolute  lg:left-1/8 xl:-translate-x-1/6 */}
              <BaseIcon
                className="visible lg:invisible  "
                id="ExinIcon2"
                disableGradient={true}
                size={190}
                fillColor="#3E243C"
              />
            </div>

            {/* Desktop */}
            <div className="invisible lg:visible">
              <div className="absolute left-11/120 -translate-x-1/24 top-[2%] ">
                <Border size={510} />
              </div>
              <div className="absolute left-4/40 -translate-x-1/8 -top-[3%]">
                <Border size={585} />
                <div className="invisible lg:visible text-title">
                  <div className="absolute left-[15%] -top-[4%]">
                    <Tag iconId="CrossEyesLaugh" text="بدون هزینه" />
                  </div>
                  <div className="absolute left-[85%] top-[45%] ">
                    <Tag iconId="Download" text="قالب  آماده" />
                  </div>
                  <div className="absolute left-[51%] -bottom-[8%]">
                    <Tag iconId="lamp" text="راهنمایی و آموزش" />
                  </div>
                  <div className="absolute left-[0%] top-[60%]">
                    <Tag iconId="Grow" text="قابل ویرایش" />
                  </div>
                </div>
              </div>

              {/* Desktop */}
              <div className="absolute left-15/120 translate-x-1/12 top-[16%] ">
                <BaseIcon
                  className="hidden lg:block"
                  id="ExinIcon2"
                  disableGradient={true}
                  size={320}
                  fillColor="#3E243C"
                />
              </div>
            </div>

            {/*  mobile  Circel */}
            <div className="lg:invisible absolute -top-11 ">
              <div className=" flex flex-col items-center justify-center">
                <div>
                  <Border size={290} />
                </div>
                <div className="absolute">
                  <Border size={340} />
                </div>
              </div>
            </div>

            {/* Mobile  tags*/}
            <div className="lg:invisible absolute top-0 text-title">
              <div className="relative ">
                <div className=" absolute -top-15 -left-30">
                  <Tag size={26} iconId="CrossEyesLaugh" text="بدون هزینه" />
                </div>
                <div className="absolute top-15 left-30">
                  <Tag size={26} iconId="Download" text="قالب  آماده" />
                </div>
                <div className="absolute top-50 left-5">
                  <Tag size={26} iconId="lamp" text="راهنمایی و آموزش" />
                </div>
                <div className="absolute top-35 -left-40  ">
                  <Tag size={26} iconId="Grow" text="قابل ویرایش" />
                </div>
              </div>
            </div>

            <div className="lg:hidden mt-30 flex flex-col items-center gap-y-4">
              <p className=" text-[14px] leading-5 text-center font-normal lg:text-2xl text-description lg:font-semibold lg:leading-9">
                قالب‌های آماده، راهنمای کامل، همه‌چی اینجاست تا کارت سریع و
                بی‌دردسر پیش بره!
              </p>
              <Link href="/products">
                <Button text="رایگان دانلود کن" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
