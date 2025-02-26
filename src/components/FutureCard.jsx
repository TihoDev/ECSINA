import React from "react";
import SimpleSvgbox from "./UI/SimpleSvgbox";
import SimpleButton from "./UI/SimpleButton";

const FutureCard = ({title , text}) => {
    return (
      <div className="w-[224px] h-[412px] bg-white shadow-[0px_2px_2px_1px_#3e37664d] rounded-[32px] px-4 pb-4 pt-6 flex flex-col justify-between">
        <div className="w-16 h-16">
            <SimpleSvgbox></SimpleSvgbox>
        </div>
        <div className="flex flex-col">
            <h1 className="font-bold text-2xl font-[Yekan] mb-4">{title}</h1>
            <p className="font-normal text-[16px] leading-[30px]">{text}</p>
        </div>
        <div className="flex flex-row-reverse mb-0">
            <SimpleButton></SimpleButton>
        </div>
        
      </div>
    );
  };
  
  export default FutureCard;