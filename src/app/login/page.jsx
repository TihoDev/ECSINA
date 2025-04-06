import React from "react";
import LoginCard from "@/components/LoginCard";
import LoginCard2 from "@/components/LoginCard2";
const page = () => {
  return (
    <div className="flex justify-center items-center h-[2000px] flex-col gap-10 ">
        <LoginCard btntext={'ارسال کد'}></LoginCard>
        <LoginCard2></LoginCard2>
    </div>
    
  );
};

export default page;