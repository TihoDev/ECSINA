"use client";
import { useState } from "react";
import BaseIcon from "../icon/BaseIcon";

const InputPassword = ({ register, errors }) => {
  const [isPassword, setIsPassword] = useState(true);
  const hasError = errors.password;

  return (
    <div className="relative">
      <input 
        {...register("password", { 
          required: "رمز عبور الزامی است", 
          minLength: { value: 8, message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }
        })} 
        type={isPassword ? "password" : "text"} 
        className={`bg-white block border w-full rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm focus:outline-0 
          ${hasError ? "border-red-500" : "border-[#D2D2D2]"}`}
        placeholder="رمز عبور"
      />

      <button type="button" onClick={() => setIsPassword((prev) => !prev)} className="absolute left-3 top-3 cursor-pointer">
        <BaseIcon id={isPassword ? "EyeOff" : "EyeThin"} disableGradient={true} fillColor="#000" />
      </button>

      {hasError && <p className="text-red-500 text-xs mt-1">{hasError.message}</p>}
    </div>
  );
};

export default InputPassword;
