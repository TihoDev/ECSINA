'use client'
import BaseIcon from './icon/BaseIcon'


const ArrowUpButton = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <div onClick={scrollToTop} className="bg-rainbow-gradient absolute -top-7 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-16 h-16 rounded-full cursor-pointer">
    <span className="text-xl text-black font-bold">
      <BaseIcon
        id={"ArrowUp"}
        size={20}
        disableGradient={true}
        fillColor="#3E243C"
      />
    </span>
  </div>
  )
}

export default ArrowUpButton