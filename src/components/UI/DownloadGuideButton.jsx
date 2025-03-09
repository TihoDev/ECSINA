'use client'
import { useState , useEffect} from "react";
import BaseIcon from "../icon/BaseIcon";
import HelpToDownloadCard from "../HelpToDownloadCard";

function DownloadGuideButton({children , className}) {
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const buttonClasses =
    "bg-gradient-to-r from-black via-[#71416D] via-[55.5%] to-[#A45F9E] text-white cursor-pointer  whitespace-nowrap flex items-center justify-between gap-x-1 px-2 text-xs rounded-xl w-fit p-4 md:text-sm xl:text-base transition-all ease-out duration-300 hover:bg-[length:130%] hover:bg-right lg:flex lg:items-center lg:gap-2 xl:gap-4 lg:justify-center group";
  useEffect(() => {
    function closeModal(e) {
      if (!e.target.closest('button') && !e.target.closest('.modal')) {
        setIsHelpModalOpen(false);
      }
    }

    if (isHelpModalOpen) {
      document.addEventListener('click', closeModal);
    } else {
      document.removeEventListener('click', closeModal);
    }

    return () => {
      document.removeEventListener('click', closeModal);
    };
  }, [isHelpModalOpen]);

  function modalHandler() {
    setIsHelpModalOpen(curr => !curr);
  }

  return (
    <>
`    <button onClick={modalHandler} className={`${buttonClasses}`}>
      <span>
        <BaseIcon
          id="Arrow"
          size={10}
          disableGradient={true}
          fillColor="#fff"
          className="hidden lg:inline-block transition-transform group-hover:rotate-45 duration-300"
        />
      </span>
      <span>راهنمای دانلود قالب ها</span>
    </button>
    {
      isHelpModalOpen ? (
        <HelpToDownloadCard />
      ) : (
        null
      )
    }
    <div className={`${isHelpModalOpen ? "inset-0 fixed z-[30] bg-white/5 backdrop-blur-sm": "hidden"}`}></div>
    </>
  );
}

export default DownloadGuideButton;
