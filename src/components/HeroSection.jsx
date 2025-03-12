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

      <div className="relative h-[560px] lg:min-h-[600px] 2xl:mt-12">
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

          <div className="relative col-span-12 flex flex-col items-center justify-center  lg:col-span-7 mt-15 lg:mt-0">
            {/* Mobile icon */}

            <div>
              <BaseIcon
                className="visible lg:invisible  "
                id="ExinLogoWithoutHand"
                disableGradient={true}
                size={190}
                fillColor="#3E243C"
              />
            </div>

            {/* Desktop */}
            <div className="invisible lg:visible absolute flex items-center justify-center left-[1%]">
              {/* Desktop icon */}
              <div className="absolute  ">
                <BaseIcon
                  className="hidden lg:block"
                  id="ExinLogoWithoutHand"
                  disableGradient={true}
                  size={320}
                  fillColor="#3E243C"
                />
              </div>
              <div className=" ">
                <Border size={500} />
              </div>
              <div className="absolute ">
                <Border size={585} />
              </div>
              {/* Desktop Tags */}

              <div className="text-title absolute ">
                <div className="relative">
                  <div className="absolute -top-70 right-25">
                    <Tag iconId="CrossEyesLaugh" text="بدون هزینه" />
                  </div>
                  <div className="absolute -top-15 left-50">
                    <Tag iconId="Download" text="قالب های  آماده" />
                  </div>
                  <div className="absolute top-50 left-5">
                    <Tag iconId="lamp" text="راهنمایی و آموزش" />
                  </div>
                  <div className="absolute top-0 right-50">
                    <Tag iconId="Grow" text="قابل ویرایش" />
                  </div>
                </div>
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
            {/* Mobile Description */}
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
