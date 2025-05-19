import Image from "next/image";

import Like from "../../../public/assets/icons/like.svg";
import RatingStart from "../../../public/assets/icons/RatingStar.svg";
import notFoundImage from "../../../public/assets/images/User.png";

const Commnet = ({ commnet }) => {
  return (
    <div className="flex flex-col gap-3 md:gap-6 rounded-3xl p-4 cursor-pointer gradient-comment ">
      {/* info */}
      <div className="flex flex-col md:flex-row items-start gap-2">
        <Image
          src={notFoundImage}
          alt=""
          width={54}
          height={54}
          className="rounded-full"
        />
        <div className="flex flex-col items-start">
          <p className=" text-xs md:text-base text-black font-semibold">
            {commnet.name}
          </p>
          <p className="text-xs text-black font-light text-nowrap">
            {commnet.role}
          </p>
        </div>
      </div>
      {/* description */}
      <div className="mb-6">
        <p className="text-black text-xs md:text-base font-normal">
          {commnet.description}
        </p>
      </div>
      {/* Actions */}
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Image
            src={Like}
            alt=""
            width={30}
            height={30}
            className="bg-white p-1 rounded-sm  cursor-pointer"
          />
          <Image
            src={Like}
            alt=""
            width={30}
            height={30}
            className="bg-white p-1 rounded-sm cursor-pointer rotate-180"
          />
        </span>

        <span className="flex items-center gap-1">
          <Image src={RatingStart} alt=" " width={16} height={16} />
          <p className="text-xs mt-1 md:text-base font-normal md:font-normal text-black">
            {commnet.rate}
          </p>
        </span>
      </div>
    </div>
  );
};

export default Commnet;
