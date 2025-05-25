import MainLayout from "@/components/layout/MainLayout";
import Button from "@/components/UI/Button";
import AllCategories from "@/components/products/AllCategories";
import SearchInput from "@/components/UI/SearchInput";
import AllProducts from "@/components/products/AllProducts";

export default function Page() {
  return (
    <MainLayout>
      <section className="gradient-main-background mt-4 md:mt-16 ">
        <div className="container py-16 md:py-[110px]">
          {/* Header */}
          <div className="flex items-center justify-between">
            <SearchInput placeholder={"جست و جو ..."} />
            <Button>راهنمای دانلود قالب</Button>
          </div>
          {/* Categories */}
          <div className=" mt-16 md:mt-30">
            <h3 className="text-black text-base md:text-4xl font-bold flex items-center justify-center">
              دسته‌بندی محصولات
            </h3>
            <AllCategories />
          </div>
          {/* Products */}

          <div className=" mt-16 md:mt-30">
            <h3 className="text-black text-base md:text-4xl font-bold flex items-center justify-center">
              جدیدترین قالب‌ها
            </h3>

            <AllProducts />
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
