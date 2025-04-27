import React,{ forwardRef } from "react";

const AuthInput = forwardRef(({ placeHolder, error, className, ...rest }, ref) => {
  const inputclasses = `flex justify-center ${className}`
    return(
      <div className={inputclasses}>
        <label htmlFor="phone" className="relative">
          <input ref={ref} placeholder=""
        {...rest} type="tel" id="phone" className="peer h-20 w-[720px] rounded-[4px] bg-[#D5C1E740] p-4 pt-6 text-black direction outline-0" dir="rtl"/>
        {error && <p className="text-red-500 text-sm mt-2 -mb-4">{error}</p>}
          <span className="absolute inset-y-7 start-3 -translate-y-5 bg-transparent px-0.5 text-sm font-medium text-[#1E132880] transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5">
            {placeHolder}
          </span>
        </label>
      </div>
    );
});
AuthInput.displayName = "AuthInput";
export default AuthInput;