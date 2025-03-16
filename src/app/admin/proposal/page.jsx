import React from "react";
import Title from "@/components/UI/Title";
import AdminButton from "@/components/UI/AdminButton";

function Proposal() {
  return (
    <div className="w-full h-full">
      <div className="w-full mb-4 flex items-center justify-between">
        <Title className="font-bold text-2xl" text="همه پروپوزال ها" />
        <AdminButton className="border-1 border-[#C3C3C3] hover:border-black bg-white hover:bg-[#F2F5F7] cursor-pointer transition-colors py-3.5 px-8 rounded-2xl">افزودن پروپوزال</AdminButton>
      </div>
    </div>
  )
}

export default Proposal;
