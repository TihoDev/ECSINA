import React from "react";
import Border from "./UI/Border";
import BaseIcon from "./icon/BaseIcon";
import Button from "./UI/Button";

const MainPageBanner = () => {
  return (
    <div className="container relative  overflow-hidden flex justify-around gap-x-30 items-center  bg-secondary-background rounded-full mt-20 ">
      <div className="absolute -right-10">
        <Border size={700} />
      </div>
      <div className="absolute -right-37">
        <Border size={860} />
      </div>
      <div className="absolute -right-37 ">
        <Border size={900} />
      </div>
      <div className="absolute -bottom-30 -left-10 ">
        <Border size={280} />
      </div>
      <div className="absolute -bottom-30 -left-10 ">
        <Border size={260} />
      </div>

      <div>
        <BaseIcon
          id="ExinIcon"
          disableGradient={true}
          fillColor="#3E243C"
          size={390}
        />
      </div>

      <div className="flex flex-col items-end gap-y-10 min-w-[40%]">
        <p className="text-3xl font-extrabold text-secondary-title">
          قالب مورد نظرت رو پیدا نکردی ؟ <br /> ما اینجاییم تا کمکت کنیم .{" "}
        </p>
        <Button text={"ارتباط با ما"} />{" "}
      </div>
    </div>
  );
};

export default MainPageBanner;
