const Input = ({ type = "text", className, placeholder, register, name, rules, errors }) => {
  if(name){
    const hasError = errors[name];
  }

  return (
    <div>
      {register && errors ? (
        <>
          <input
            type={type}
            {...register(name, rules)}
            className={`${className} ${hasError ? "border-red-500" : "border-[#D2D2D2]"}`}
            placeholder={placeholder}
          />
          {hasError && <p className="text-red-500 text-xs mt-1">{hasError.message}</p>}
        </>
      ) : (
        <>
          <input type={type} className={className} placeholder={placeholder} name={name} />
        </>
      )}
    </div>
  );
};

export default Input;
