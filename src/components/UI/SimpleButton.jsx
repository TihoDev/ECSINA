import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Button = ({ text }) => {
  return (
    <button className="w-10 h-10 justify-center group flex items-center gap-7 p-5 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] cursor-pointer transition-all duration-300 hover:bg-purple-gradient-hover">
      <span className="transition-transform duration-300 group-hover:rotate-45">
        <BaseIcon id="Arrow" size={12} disableGradient={false} />
      </span>
    </button>
  );
};

export default Button;
