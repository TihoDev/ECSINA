import BaseIcon from "../icon/BaseIcon";
import SimpleButton from "../UI/SimpleButton";

const ProductDetailsSection = ({ product }) => {
  return (
    <div className="shadow-main-page rounded-4xl">
      {/* Header */}
      <div className=" flex items-center justify-between p-6">
        <div className="flex items-center gap-x-2 lg:gap-x-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-purple-gradient p-1.5 rounded-[5px]">
              <BaseIcon
                id="Galery"
                fillColor="#fff"
                size={20}
                disableGradient={true}
              />
            </div>
          ))}
        </div>
        <div>
          <SimpleButton additionalStyles="p-2.5  rounded-2xl text-xs lg:text-xl font-semi-bold">
            فیلم آموزشی
          </SimpleButton>
        </div>
      </div>
      {/* Body */}
      <div>
        {/* title */}
        <div className="bg-main-color-active flex items-center gap-x-5 px-4 py-2  ">
          <div className="flex items-center gap-x-1">
            <BaseIcon
              id="Download_Package"
              disableGradient={true}
              fillColor="#fff"
              size={35}
            />
            <p className="text-white text-xs lg:text-xl font-semibold">
              <span>12</span> دانلود
            </p>
          </div>
          <div className="flex items-center gap-x-1">
            <BaseIcon
              id="Share"
              disableGradient={true}
              fillColor="#fff"
              size={35}
            />
            <p className="text-white text-xs lg:text-xl font-semibold">
              اشتراک گذاری
            </p>
          </div>
        </div>
        {/* main */}

        <div className="mt-8  px-8 py-4">
          {/* Image or video */}
          <img
            src={product.main_image}
            alt={product.title}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSection;
