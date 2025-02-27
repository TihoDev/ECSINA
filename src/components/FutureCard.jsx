import React from "react";

const FutureCard = ({title , text}) => {
    return (
      <div className="w-[224px] h-[412px] bg-white shadow-[0px_2px_2px_1px_#3e37664d] rounded-[32px] px-4 pb-4 pt-6 flex flex-col justify-between">
        <div className="w-16 h-16">
            <div className="w-16 h-16 rounded-lg p-4 shadow-[0px_2px_2px_1px_#1e132840]">
              {/*svg comes here*/ }
            </div>
        </div>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl font-[Yekan] mb-4">{title}</h1>
            <p className="font-normal text-[16px] leading-[30px]">{text}</p>
        </div>
        <div className="flex flex-row-reverse mb-0">
        <button className="w-10 h-10 justify-center group flex items-center gap-7 p-5 rounded-2xl shadow-[0px_1px_2px_1px_#00000040] cursor-pointer transition-all duration-300 hover:bg-purple-gradient-hover">
      <span className="transition-transform duration-300 group-hover:rotate-45">
      </span>
    </button>
        </div>
        
      </div>
    );
  };
  
  export default FutureCard;