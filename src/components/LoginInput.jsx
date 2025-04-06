import React from "react";

const LoginInput = ({placeHolder,className}) => {
  const inputclasses = `flex justify-center ${className}`
    return(
        <div className={inputclasses}>
                <label htmlFor="Email" className="relative">
                  <input type="email" id="Email" placeholder="" className="peer h-20 w-[720px] rounded-[4px] bg-[#D5C1E740] p-4 pt-6 text-black"/>
                  <span className="absolute inset-y-7 start-3 -translate-y-5 bg-transparent px-0.5 text-sm font-medium text-[#1E132880] transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
                  {placeHolder}
                  </span>
                </label>
              </div>
    )
}

export default LoginInput