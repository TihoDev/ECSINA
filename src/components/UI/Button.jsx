import Image from "next/image";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  icon = null,
  iconSize = 10,
  onClick,
  className = "",
  ...props
}) => {
  const baseStyles =
    "flex items-center gap-2 rounded-xl p-3 md:px-6 md:py-4 text-sm md:text-xl font-medium cursor-pointer transition-all duration-200 group";

  const variants = {
    primary: "bg-primary-7 text-white hover:bg-primary-8",
    outline: "border border-2 border-primary-7 bg-transparent",
  };

  const disabledStyles =
    "bg-secondary-16 cursor-not-allowed pointer-events-none";

  const btnClass = `${baseStyles} ${variants[variant]} ${
    disabled ? disabledStyles : ""
  } ${className}`.trim();

  return (
    <button
      type={type}
      className={btnClass}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && (
        <Image
          src={icon}
          alt="button icon"
          width={iconSize}
          height={iconSize}
          className="object-contain transition-transform duration-200 group-hover:rotate-45"
        />
      )}
      <span>{children}</span>
    </button>
  );
};
export default Button;
