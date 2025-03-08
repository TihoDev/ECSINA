import BaseIcon from "../icon/BaseIcon";
import DownloadGuideButton from "../UI/DownloadGuideButton";

const SearchBar = () => {
  return (
    <div className=" flex justify-between my-10 gap-2 md:gap-4 lg:gap-8">
      <form className="flex relative w-2/3 md:w-3/4 lg:w-4/5">
        <input
          type="text"
          className="border-[3px] border-[#71416D] placeholder:text-title rounded-xl pr-6 py-3 lg:py-4 placeholder:font-normal w-full shadow-product-card focus:outline-none z-30"
          placeholder="جست و جو"
        />
        <div className="w-full h-full absolute hidden sm:flex justify-end ">
          <div className="h-full w-20 flex justify-center items-center absolute bg-purple-gradient rounded-l-xl z-30 cursor-pointer bg-gradient-to-r from-black via-[#71416D] via-[55.5%] to-[#A45F9E] hover:bg-[length:130%] hover:bg-right transition-all duration-300 ease-out">
            <BaseIcon
              id="Search"
              size={40}
              disableGradient={true}
              fillColor="#A2A2A2"
            />
          </div>
        </div>
      </form>
      <DownloadGuideButton />
    </div>
  );
};

export default SearchBar;
