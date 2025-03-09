import Link from "next/link";
import SimpleButton from "./UI/SimpleButton";
import { formatDate } from "@/heplerFunctions/formatDate";
function ProductDetailsCard({ product }) {
  return (
    <div className="rounded-[22px] shadow-detail-shadow lg:w-2/5">
      <div className="flex flex-col justify-between gap-5 pr-5 py-6 text-[#71416D] [&>span]:text-sm lg:[&>span]:text-base font-bold">
        <h3 className="text-black text-base lg:text-2xl font-extrabold">
          جزئیات
        </h3>
        <span> حجم : {product.size}MB </span>
        <span>فرمت : {product.format}</span>
        <span>تعداد صفحات : {product.number_of_page}</span>
        <span>تاریخ انتشار : {formatDate(product.created_at)}</span>
        <span>تاریخ بروزرسانی : {formatDate(product.updated_at)}</span>
      </div>
      <div className="w-full flex justify-center">
        <Link href={product.file_path} target="_blank">
          <SimpleButton additionalStyles="lg:py-2.5 xl:py-3 w-52 sm:w-56 lg:w-52 xl:w-60 mt-2 mb-5 rounded-2xl font-semibold">
            دانلود
          </SimpleButton>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
