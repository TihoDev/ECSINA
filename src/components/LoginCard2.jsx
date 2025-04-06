"use client";
import React from "react";
import Image from 'next/image'
import LoginInput from "./LoginInput";
import Button from "./UI/Button";
import backArrow from '../../public/icons/backArrow.svg'
import closeIcon from '../../public/icons/loginClose.svg'

const LoginCard2 = ({}) =>{

      const handleClick = () => {
        console.log("clicked");
      };

    return(
        <div className=" flex flex-col rounded-[10px] bg-white w-[800px] h-[600px] px-10 py-8 shadow-[0px_4px_12px_0px_#FE32FFB2]">
            <div className="bg-[#F4EFF9] h-[140px] w-full px-10 py-8 flex flex-row justify-between rounded-[10px] mb-19">
                <div>
                    <button className="cursor-pointer flex flex-row-reverse gap-1 items-center">
                        <Image width={42} height={42} src={closeIcon} alt="Close"/>
                    </button>
                </div>
                <div className="flex items-center">
                    <p className="text-[#1E1328CC]" >ورود دو مرحله ای</p>
                </div>
                <div>
                    <button className="cursor-pointer">
                        <Image src={backArrow} width={24} height={24} alt="Login"></Image>
                    </button>
                </div>
            </div>
            <div className="mb-6">
                <p className="text-black text-[16px] font-normal">برای ورود ، کد ارسالی به موبایل خود را در فرم زیر را وارد نمایید.</p>
            </div>
            <div className="flex justify-between items-center mb-4">
                <p className=" flex items-center rounded-[4px] bg-gradient-to-r from-[#3E243C] via-[#71416D] via-[45.5%] to-[#A45F9E] max-w-[350px] max-h-[42px] p-3 justify-center text-center text-white font-normal text-[14px] text-nowrap">کد تایید به شماره همراه6344*** 0933 ارسال شده است. </p>
                <div>
                    <span className="bg-gradient-to-r from-[#3E243C] via-[#71416D] via-[45.5%] to-[#A45F9E] bg-clip-text text-transparent text-2xl">1:45</span>
                </div>
            </div>
            <div className="mb-6">
                <LoginInput placeHolder={'کد تایید'}></LoginInput>
            </div>
            <div className="flex justify-center mb-9">
                <Button className={"w-[280px] flex justify-center h-[70px] [&>*]:text-2xl mb-6 self-center"} text={'ورود'} onClick={handleClick}></Button>
            </div>
            <div>
                <p className="text-black font-semibold text-[12px] mb-6">تلفن پشتیبانی: 011-333247000</p>
            </div>
        </div>
)};

export default LoginCard2;