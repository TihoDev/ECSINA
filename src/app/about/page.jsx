import MainLayout from "@/components/layout/MainLayout";
import Typography from "@/components/UI/Typography";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "درباره اکسینا",
  description:
    "سایت تخصصی ما با ارائه خدمات حرفه‌ای در زمینه نگارش پروپوزال و طراحی بوم کسب‌وکار و.. همراه شما در مسیر موفقیت است. ما با تیمی متخصص و باتجربه، آماده ارائه مشاوره و خدمات تخصصی به دانشجویان، استارتاپ‌ها و سازمان‌ها هستیم.",
  keywords: "",
  openGraph: {
    title: "Ecsina",
    type: "website",
    locale: "fa_IR",
  },
};

const AboutPage = () => {
  return (
    <MainLayout>
      <section className="flex flex-col  items-center my-5   min-w-screen">
        <div className="container my-8 p-5 py-12 relative shadow-2xl  md:shadow-none  rounded-lg">
          <div className="z-20 top-20 left-10 absolute">
            <Image src={"/assets/icons/Star.svg"} alt="Star" width={20} height={20} />
          </div>
          <div className="z-20 absolute">
            <Image src={"/assets/icons/Star.svg"} alt="Star" width={20} height={20} />
          </div>
          {/* <Image src={"/assets/icons/MainLogo.svg"} alt="Main Logo" width={600} height={550} className="z-20" /> */}
          <h1 className="text-black  text-center text-4xl mb-12 font-bold pt-8">درباره اکسینا</h1>
          <div>
            <h2 className="font-extralight text-xl text-center">اکسین، سکویی برای هوشمندسازی تولید اسناد کسب‌وکار</h2>
            <Typography className={"font-extralight text-xl   text-wrap text-center "}>
              اکسین یک پلتفرم نوآورانه است که با هدف ساده‌سازی فرآیند تولید اسناد کسب‌وکار طراحی شده است. ما در اکسین تلاش کرده‌ایم بستری فراهم کنیم که کاربران حتی با کمترین  دانش تخصصی در این زمینه
              بتوانند اسناد مهمی مانند بیزینس پلن، بوم مدل کسب‌وکار، پروپوزال، بیزینس مدل، بوم ناب و... را به شکلی کاملاً حرفه‌ای تهیه و ارائه کنند.
            </Typography>
          </div>
          {/* <div className="mt-8">
            <h1 className="text-black text-3xl font-bold text-center pt-8">اهداف اکسینا</h1>
            <div className="grid gap-5 md:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  my-6 px-4 sm:px-8">
              <div className=" border-1 border-primary-8 rounded-4xl p-4 box-gradient hover:shadow-lg transition-all ease-linear duration-500 py-8">
                <h1 className="text-black text-2xl font-bold text-center my-3">اهداف اکسینا</h1>
                <Typography className={"text-base text-right"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
              <div className=" border-1 border-primary-8 rounded-4xl p-4 box-gradient hover:shadow-lg transition-all ease-linear duration-500 py-8">
                <h1 className="text-black text-2xl font-bold text-center my-3">اهداف اکسینا</h1>
                <Typography className={"text-base text-right"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
              <div className=" border-1 border-primary-8 rounded-4xl p-4 box-gradient hover:shadow-lg transition-all ease-linear duration-500 py-8">
                <h1 className="text-black text-2xl font-bold text-center my-3">اهداف اکسینا</h1>
                <Typography className={"text-base text-right"}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                </Typography>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
