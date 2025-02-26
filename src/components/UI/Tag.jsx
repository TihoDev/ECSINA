import React from "react";
import BaseIcon from "../icon/BaseIcon";

const Tag = ({ iconId, text = "" }) => {
  return (
    <div className="flex flex-col items-center gap-y-4 bg-section-background px-6 py-4 rounded-xl shadow-hero-section ">
      <BaseIcon id={iconId} />
      <p className="text-xl font-bold">{text}</p>
    </div>
  );
};

export default Tag;
