"use client";
import { useState } from "react";
import BaseIcon from "../icon/BaseIcon";

const InputPassword = ({ register, errors }) => {
  const [isPassword, setIsPassword] = useState(true);

  return (
    <div className="relative">
      <input 
        {...register("password", { 
          required: "رمز عبور الزامی است", 
          minLength: { value: 8, message: "رمز عبور باید حداقل ۸ کاراکتر باشد" }
        })} 
        type={isPassword ? "password" : "text"} 
        className="bg-white block border w-full border-[#D2D2D2] rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm focus:outline-0" 
        placeholder="رمز عبور"
      />

      <button type="button" onClick={() => setIsPassword((prev) => !prev)} className="absolute left-3 top-3 cursor-pointer">
        <BaseIcon id={isPassword ? "EyeOff" : "EyeThin"} disableGradient={true} fillColor="#000" />
      </button>

      {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
    </div>
  );
};

export default InputPassword;
