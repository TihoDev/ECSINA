import Link from "next/link";
import SimpleButton from "./UI/SimpleButton";
import { formatDate } from "@/heplerFunctions/formatDate";
function ProductDetailsCard({ product }) {
  return (
    <div className="px-10 py-8 shadow-main-page w-full rounded-4xl lg:sticky lg:top-20  ">
      <div className="flex flex-col justify-between gap-5 ">
        <h3 className="text-black text-base lg:text-3xl font-bold">جزئیات:</h3>

        <div className="flex flex-col gap-4 lg:gap-4 text-xs lg:text-base font-bold text-text-color">
          <p>
            {" "}
            حجم : <span>{product.size}</span>{" "}
          </p>
          <p>
            فرمت : <span> {product.format}</span>
          </p>
          <p>
            تعداد صفحات : <span> {product.number_of_page}</span>
          </p>
          <p>
            تاریخ انتشار : <span>{formatDate(product.created_at)}</span>
          </p>
          <p>
            تاریخ بروزرسانی : <span>{formatDate(product.updated_at)}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-3 lg:mt-6   ">
        <Link href={product.file_path} target="_blank">
          <SimpleButton additionalStyles="px-4 lg:px-5 py-2 lg:py-4 rounded-2xl text-xs  lg:text-2xl font-semi-bold">
            دانلود قالب
          </SimpleButton>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetailsCard;
