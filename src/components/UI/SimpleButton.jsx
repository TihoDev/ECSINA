function SimpleButton({ additionalStyles = "", children }) {
  const basicStyles =
    "bg-gradient-to-r from-[#3E243C] via-[#71416D] to-[#A45F9E] hover:from-[#3E243C] hover:via-[#5f375c] hover:to-[#a05e9a] transition-all ease-out duration-300 cursor-pointer text-white py-2 bg-[length:200%] hover:bg-[length:130%] ";
  return <button className={basicStyles + additionalStyles}>{children}</button>;
}

export default SimpleButton;