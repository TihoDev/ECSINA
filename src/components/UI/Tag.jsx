import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Tag = ({ iconId, text = "", size = 50 }) => {
  return (
    <div className="flex flex-col items-center   gap-y-4 bg-section-background px-2 lg:px-6 py-2 lg:py-4 rounded-xl shadow-hero-section ">
      <BaseIcon id={iconId} size={size} />
      <p className=" text-[8px] lg:text-xl text-center  font-bold">{text}</p>
    </div>
  );
};

export default Tag;
