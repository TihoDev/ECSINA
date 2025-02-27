import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Button = ({ text, disableIcon = false }) => {
  return (
    <button
      className="group flex items-center gap-2 lg:gap-5 px-3 py-2.5 lg:p-5 rounded-2xl
    bg-gradient-to-r from-black via-[#71416D] via-[55.5%] to-[#A45F9E]
    bg-[length:200%] bg-left transition-[background-position] duration-300 ease-out 
    hover:bg-[length:130%] hover:bg-right cursor-pointer z10"
    >
      {!disableIcon && (
        <div>
          <span className="hidden lg:block transition-transform duration-300 group-hover:rotate-45">
            <BaseIcon id="Arrow" size={15} disableGradient={true} />
          </span>
          <span className="lg:hidden">
            <BaseIcon id="Arrow" size={8} disableGradient={true} />
          </span>
        </div>
      )}
      <p className="text-white text-xs lg:text-2xl font-medium">{text}</p>
    </button>
  );
};

export default Button;
