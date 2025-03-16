"use client";
const Input = ({ type = "text", placeholder, register, name, rules, errors }) => {
  return (
    <div>
      <input
        type={type}
        {...register(name, rules)}
        className="bg-white block border w-full border-[#D2D2D2] rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm focus:outline-0"
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default Input;