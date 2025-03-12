import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Tag = ({ iconId, text = "", size = 40 }) => {
  return (
    <div className="flex flex-col items-center gap-y-2 lg:gap-y-4 bg-section-background px-2 lg:px-4 py-2 lg:py-3 rounded-xl shadow-hero-section ">
      <BaseIcon id={iconId} size={size} />
      <p className="whitespace-nowrap text-[10px] lg:text-base text-center font-bold">
        {text}
      </p>
    </div>
  );
};

export default Tag;
