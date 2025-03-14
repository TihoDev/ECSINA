'use client'
import { useState , useEffect } from "react"
import BaseIcon from "./icon/BaseIcon"

const InputPassword = () => {
    const [isPassword , setIsPassword] = useState(true);

  return (
    <div className='relative'>
        <input type={isPassword ? "password" : "text"} className='bg-white block border-1 w-full border-[#D2D2D2] rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm focus:outline-0' placeholder='رمز عبور'/>

        <button type="button" onClick={() => setIsPassword(prev => !prev)}>
            <BaseIcon id={isPassword ? "EyeOff" : "EyeThin"} className='absolute left-3 top-0 translate-y-2/9 cursor-pointer' disableGradient={true} fillColor='#000'/>
        </button>
    </div>
  )
}

export default InputPassword