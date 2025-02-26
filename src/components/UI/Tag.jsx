import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Tag = ({ iconId, text = "" }) => {
  return (
    <div className="flex flex-col items-center gap-y-4 bg-section-background px-6 py-4 rounded-xl shadow-hero-section ">
      <div className="hidden lg:block">
        <BaseIcon id={iconId} size={56} />
      </div>
      <div className="lg:hidden">
        <BaseIcon id={iconId} size={26} />
      </div>

      <p className=" text-[8px] lg:text-xl  font-bold">{text}</p>
    </div>
  );
};

export default Tag;
