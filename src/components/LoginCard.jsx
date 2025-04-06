"use client";
import React, {useState} from "react";
import Button from "./UI/Button";
import LoginInput from "./LoginInput";
import Image from 'next/image'
import closeIcon from '../../public/icons/loginClose.svg'
import loginIcon from '../../public/icons/login.svg'
import exinIcon from '../../public/icons/exinIconWithoutHandsPurple.svg'
const LoginCard = ({btntext}) => {
  const [buttontext, setButtonText] = useState(btntext); // Create state for button text

  const handleClick = () => {
    setButtonText("ورود"); // Update state instead of modifying prop
    console.log("clicked");
  };
  return (
    <div className=" flex flex-col rounded-[10px] bg-white w-[800px] h-[600px] px-10 py-8 shadow-[0px_4px_12px_0px_#FE32FFB2]">
      <div className="flex flex-row justify-between mb-6 max-h-[30px]">
          <button className="cursor-pointer flex flex-row-reverse gap-1 items-center">
          <h1 className="text-[#2E334266]">ورود با دسترسی سریع</h1>
            <Image src={loginIcon} width={24} height={24} alt="Login"></Image>
          </button>
        <div>
          <button className="cursor-pointer">
            <Image width={42} height={42} src={closeIcon} alt="Close"/>
          </button>
        </div>
      </div>
      <Image src={exinIcon} width={70} height={140} alt="Exin" className="self-center mb-6"></Image>
      <h1 className="text-black font-normal text-[20px] mb-4"> برای ورود به  
        <span className="text-[#71416D] font-semibold"> اکسین </span> شماره تلفن خود را وارد کنید .
      </h1>
      <p className=" flex items-center rounded-[4px] bg-gradient-to-r from-[#3E243C] via-[#71416D] via-[45.5%] to-[#A45F9E] max-w-[300px] max-h-[42px] p-3 justify-center text-center text-white font-normal text-[14px] mb-4">کد تایید به تلفن همراه شما ارسال خواهد شد.</p>
      <LoginInput placeHolder={'ایمیل'} className={"mb-6"}></LoginInput>
      <Button className={"w-[280px] flex justify-center h-[70px] [&>*]:text-2xl mb-6 self-center"} text={buttontext} onClick={handleClick}></Button>
      <p className="text-black font-semibold text-[12px] mb-6">تلفن پشتیبانی: 011-333247000</p>
    </div>
  );
};

export default LoginCard;