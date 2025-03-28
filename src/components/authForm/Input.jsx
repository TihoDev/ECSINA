"use client";
import React, { useState } from "react";
import BaseIcon from "../icon/BaseIcon";

const Input = ({ type = "text", className, placeholder, register = null, errors }) => {
  const hasError = name && errors ? errors[name] : null; // Ensure `hasError` is always defined
  const [isSecure, setSecure] = useState(type === "password");
  return (
    <div className="relative">
      <input
        type={isSecure ? "password" : "tex"}
        {...register}
        className={`${className} bg-white block border w-full border-[#D2D2D2] rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm  focus:outline-0 ${
          hasError ? "border-red-500" : "border-[#D2D2D2]"
        }`}
        placeholder={placeholder}
        security={isSecure}
      />
      {type == "password" && (
        <button type="button" onClick={() => setSecure(() => !isSecure)} className="absolute left-3 top-3 cursor-pointer">
          <BaseIcon id={isSecure ? "EyeOff" : "EyeThin"} disableGradient={true} fillColor="#000" />
        </button>
      )}
    </div>
  );
};

export default Input;
