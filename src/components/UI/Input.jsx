"use client";
const Input = ({ type = "text",className, placeholder, register, name, rules, errors }) => {
  return (
    <div>
      <input
        type={type}
        {...register(name, rules)}
        className={className}
        placeholder={placeholder}
      />
      {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>}
    </div>
  );
};

export default Input;