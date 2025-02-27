import BaseIcon from "../icon/BaseIcon";

function DownloadGuideButton({children}) {
  const buttonClasses =
    "bg-gradient-to-r from-black via-[#71416D] via-[55.5%] to-[#A45F9E] text-white cursor-pointer px-2 text-xs rounded-xl w-1/3 md:w-1/4 lg:w-1/5 md:text-sm xl:text-base transition-all ease-out duration-300 hover:bg-[length:130%] hover:bg-right lg:flex lg:items-center lg:gap-2 xl:gap-4 lg:justify-center group";
  return (
    <button className={buttonClasses}>
      <span>
        <BaseIcon
          id="Arrow"
          size={10}
          disableGradient={true}
          fillColor="#fff"
          className="hidden lg:inline-block transition-transform group-hover:rotate-45 duration-300"
        />
      </span>
      <span>{children}</span>
    </button>
  );
}

export default DownloadGuideButton;
