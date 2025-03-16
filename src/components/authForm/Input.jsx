const Input = ({ type = "text",className, placeholder, register, name, rules, errors }) => {
  const hasError = errors[name];

  return (
    <div>
      <input
        type={type}
        {...register(name, rules)}
        className={`${className}
          ${hasError ? "border-red-500" : "border-[#D2D2D2]"}`}
        placeholder={placeholder}
      />
      {hasError && <p className="text-red-500 text-xs mt-1">{hasError.message}</p>}
    </div>
  );
};

export default Input;
