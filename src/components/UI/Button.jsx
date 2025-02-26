import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Button = ({ text }) => {
  return (
    <button className="group flex items-center gap-7 p-5 rounded-2xl bg-purple-gradient cursor-pointer transition-all duration-300 hover:bg-purple-gradient-hover">
      <span className="transition-transform duration-300 group-hover:rotate-45">
        <BaseIcon id="Arrow" size={12} disableGradient={true} />
      </span>
      <p className="text-white text-2xl font-medium">{text}</p>
    </button>
  );
};

export default Button;
