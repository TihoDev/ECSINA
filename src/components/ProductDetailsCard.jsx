import SimpleButton from "./UI/SimpleButton"

function ProductDetailsCard() {
    return (
        <div className="rounded-[22px] shadow-detail-shadow lg:w-2/5">
        <div className="flex flex-col justify-between gap-5 pr-5 py-6 text-[#71416D] [&>span]:text-sm lg:[&>span]:text-base font-bold">
          <h3 className="text-black text-base lg:text-2xl font-extrabold">
            جزئیات
          </h3>
          <span>حجم :</span>
          <span>فرمت :</span>
          <span>تعداد صفحات :</span>
          <span>تاریخ انتشار :</span>
          <span>تاریخ بروزرسانی :</span>
        </div>
        <div className="w-full flex justify-center">
          <SimpleButton additionalStyles="lg:py-2.5 xl:py-3 w-52 sm:w-56 lg:w-52 xl:w-60 mt-2 mb-5 rounded-2xl font-semibold">دانلود</SimpleButton>
        </div>
      </div>
    )
}

export default ProductDetailsCard
