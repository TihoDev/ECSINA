import MainLayout from "@/components/layout/MainLayout";
import AllCategories from "@/components/products/AllCategories";
import SearchInput from "@/components/UI/SearchInput";
import AllProducts from "@/components/products/AllProducts";

export default function Page() {
  return (
    <MainLayout>
      <section className="gradient-main-background mt-4 md:mt-16 ">
        <div className="container pb-16 pt-8 md:pb-[110px]">
          {/* Header */}
          <div className="flex items-center justify-between gap-6">
            <SearchInput placeholder={"جست و جو ..."} />
            <button className="bg-primary-7 rounded-xl md:rounded-2xl text-white text-nowrap py-3 px-5 md:py-5  lg:px-11 text-xs lg:text-2xl font-semibold cursor-pointer hover:bg-primary-8 transition-all duration-200 ">
              راهنمای دانلود قالب
            </button>
          </div>
          {/* Categories */}
          <div className=" mt-16 md:mt-30">
            <h3 className="text-black text-base md:text-4xl font-bold flex items-center justify-center">دسته‌بندی محصولات</h3>
            <AllCategories />
          </div>
          {/* Products */}

          <div className=" mt-16 md:mt-30">
            <h3 className="text-black text-base md:text-4xl font-bold flex items-center justify-center">جدیدترین قالب‌ها</h3>

            <AllProducts />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
