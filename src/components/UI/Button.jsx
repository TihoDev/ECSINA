import React from "react";
import PropTypes from "prop-types";
import BaseIcon from "../icon/BaseIcon";

const Button = ({ text, disableIcon = false }) => {
  const buttonClasses = `
    group flex items-center gap-2 lg:gap-5 px-3 py-2.5 lg:p-4 rounded-2xl
    bg-gradient-to-r from-black via-[#71416D] via-[55.5%] to-[#A45F9E]
    bg-[length:200%] bg-left transition-[background-position] duration-300 ease-out 
    hover:bg-[length:130%] hover:bg-right cursor-pointer z10
  `;

  const renderIcon = () => (
    <div>
      <span
        className={`transition-transform duration-300 group-hover:rotate-45 ${
          !disableIcon ? "hidden lg:block" : ""
        }`}
      >
        <BaseIcon id="Arrow" size={15} disableGradient />
      </span>
      <span className="lg:hidden ">
        <BaseIcon id="Arrow" size={8} disableGradient />
      </span>
    </div>
  );

  return (
    <button className={buttonClasses}>
      {!disableIcon && renderIcon()}
      <p className="text-white text-xs lg:text-xl font-medium">{text}</p>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disableIcon: PropTypes.bool,
};

Button.defaultProps = {
  disableIcon: false,
};

export default Button;
