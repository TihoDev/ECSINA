import MainLayout from "@/components/layout/MainLayout";
import Typography from "@/components/UI/Typography";
import React from "react";

export const metadata = {
  title: "درباره اکسین",
  description: "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
  keywords: "بوم ناب، لوازم نقاشی، محصولات هنری، خرید آنلاین، بوم نقاشی، رنگ روغن، آبرنگ، مداد طراحی",
  openGraph: {
    title: "بوم ناب | فروشگاه تخصصی لوازم نقاشی و هنری",
    description: "بوم ناب، مرجع تخصصی خرید محصولات هنری و لوازم نقاشی با کیفیت. ارائه دهنده بهترین برندهای هنری با قیمت مناسب و ارسال سریع به سراسر ایران.",
    type: "website",
    locale: "fa_IR",
  },
};

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col  items-center my-5   min-w-screen">
        <div className="py-6 pb-10 px-12 w-4/5 blue_shadow rounded-lg">
          <h1 className="text-black md:text-right  text-center text-3xl font-bold pt-8">درباره اکسینا</h1>
          <Typography className={"font-light text-xl my-8  text-center md:text-right"}>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
            مورد نیاز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            <br />
            تکنولوژی مورد نیاز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
            شرایط فعلی تکنولوژی مورد نیاز لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
            و برای شرایط فعلی تکنولوژی مورد نیاز
          </Typography>
          <div className="mt-8">
            <h1 className="text-black text-3xl font-bold text-center pt-8">اهداف اکسینا</h1>
            <div className="grid gap-10  md:grid-cols-3 my-6 px-8">
              <div className="col-span-1 border-1 border-primary-8 rounded-4xl p-4 box-gradient hover:shadow-lg transition-all ease-linear duration-500 py-8">
                <h1 className="text-black text-2xl font-bold text-center my-3">اهداف اکسینا</h1>
                <Typography className={"text-base text-right"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
              <div className="col-span-1 border-1 border-primary-8 rounded-4xl p-4 box-gradient hover:shadow-lg transition-all ease-linear duration-500 py-8">
                <h1 className="text-black text-2xl font-bold text-center my-3">اهداف اکسینا</h1>
                <Typography className={"text-base text-right"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
              <div className="col-span-1 border-1 border-primary-8 rounded-4xl p-4 box-gradient hover:shadow-lg transition-all ease-linear duration-500 py-8">
                <h1 className="text-black text-2xl font-bold text-center my-3">اهداف اکسینا</h1>
                <Typography className={"text-base text-right"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
