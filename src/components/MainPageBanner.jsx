import React from "react";
import Border from "./UI/Border";
import BaseIcon from "./icon/BaseIcon";
import Button from "./UI/Button";

const MainPageBanner = () => {
  return (
    <section className="mx-[12%] lg:mx-[8%]">
      <div className="xl:px-12 section-shadows xl:py-10 2xl:py-12 2xl:px-24 relative overflow-hidden flex  gap-6  md:gap-0 justify-between items-center bg-secondary-background rounded-[70px] lg:rounded-full mt-20 ">
        {/* DESKTOP */}
        <div className="relative hidden lg:block">
          <div className=" ">
            <BaseIcon
              id="ExinIcon"
              disableGradient={true}
              fillColor="#3E243C"
              size={390}
            />
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="absolute -top-1/15 -right-1/6  rounded-full shadow-border">
              <Border size={480} />
            </div>
            <div className="absolute -top-2/15 -right-7/32 rounded-full shadow-border">
              <Border size={530} />
            </div>
            <div className="absolute -top-3/15 -right-8/32 rounded-full shadow-border">
              <Border size={570} />
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="relative lg:hidden py-12 sm:pr-12">
          <div>
            <BaseIcon
              id="ExinIcon"
              disableGradient={true}
              fillColor="#3E243C"
              size={130}
            />
          </div>
        </div>

        <div className="relative ">
          <div className="flex flex-col items-end gapy-1 lg:gap-y-10 ml-10 lg:ml-16 ">
            <p className="text-[12px] max-w-[250px] lg:max-w-[400px] lg:text-[20px] mb-4 lg:text-3xl font-extrabold text-secondary-title leading-5 lg:leading-12 ">
              قالب مورد نظرت رو پیدا نکردی ؟ ما اینجاییم تا کمکت کنیم .{" "}
            </p>
            <Button text={"ارتباط با ما"} />
          </div>
          <div className="invisible lg:visible flex items-center justify-center ">
            <div className="absolute top-10/12 -left-4/10">
              <Border size={230} />
            </div>
            <div className=" absolute top-9/12 -left-4/10">
              <Border size={270} />
            </div>
          </div>
        </div>
        {/* SVG */}

        {/* DESKTOP */}
        <div className="invisible lg:visible  absolute -top-6 left-60">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="479"
            height="232"
            viewBox="0 0 479 232"
            fill="none"
          >
            <path
              d="M478 0C477.966 0.0546413 477.928 0.113186 477.895 0.167827"
              stroke="#3E243C"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeDasharray="5 5"
            />
            <path
              d="M472.736 8.27466C464.4 21.2492 455.608 34.0057 444.571 45.0995C431.19 58.5452 414.059 69.5378 394.597 72.9177C375.132 76.2976 353.276 70.9941 340.725 56.8825C335.088 50.5471 331.468 41.7702 334.635 34.1147C338.462 24.8589 369.976 8.24351 372.463 53.4559C372.598 55.8818 372.167 58.4518 370.64 60.4338C368.471 63.2413 364.39 64.0279 360.69 64.5263C337.223 67.6648 313.258 67.6375 289.796 64.4406C257.799 60.0794 225.681 49.854 193.854 55.1731C165.186 59.9665 140.746 76.8233 118.934 94.6107C78.4075 127.655 42.6433 165.873 14.5293 208.422"
              stroke="#3E243C"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeDasharray="5 5"
            />
            <path
              d="M11.8989 212.445C11.8609 212.499 11.8271 212.558 11.7891 212.613"
              stroke="#3E243C"
              strokeWidth="2"
              strokeMiterlimit="10"
              strokeLinejoin="round"
              strokeDasharray="5 5"
            />
            <path
              d="M13.6762 208.938C13.8628 209.245 14.1995 209.428 14.5584 209.418L17.6783 209.331L17.6506 208.332L23.8904 208.159L23.9181 209.158L24.7091 209.136L25.2162 209.822L21.5687 212.519L20.9741 211.715L17.3266 214.413L17.9212 215.217L14.2738 217.914L13.6791 217.11L11.8554 218.459C11.8125 218.491 11.7722 218.526 11.7349 218.564L10.1787 220.156L10.8938 220.855C9.85644 221.916 8.81889 222.978 7.78128 224.039L7.06616 223.34L5.5099 224.933L3.95363 226.525L4.66874 227.224C3.64768 228.268 2.62668 229.313 1.60587 230.357L1.63465 230.271L1.30251 230.16L0.841112 229.709L0.730643 229.822C1.17375 228.501 1.61685 227.18 2.05996 225.86L3.00801 226.178L4.3815 222.084L3.43344 221.766C3.89124 220.402 4.34903 219.038 4.80682 217.673L5.7549 217.991L6.44149 215.944C6.45993 215.889 6.47355 215.833 6.48221 215.775L6.80414 213.642L5.81533 213.493L6.45919 209.226L7.44799 209.375L8.09185 205.108L7.10304 204.959L7.7469 200.692L8.73571 200.842L8.73909 200.819L9.0836 201.386L9.93802 200.866L12.9998 205.901L12.1454 206.421L13.6762 208.938ZM27.0177 208.172L27.0325 208.373L27.0187 208.374L27.0131 208.172L27.0177 208.172Z"
              stroke="#3E243C"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeDasharray="5 5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default MainPageBanner;
