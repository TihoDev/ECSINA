import Pen from "../../../public/assets/icons/Pen.svg";
import Comment from "../../../public/assets/icons/Comment.svg";
import Document2 from "../../../public/assets/icons/Document2.svg";
import Emoji from "../../../public/assets/icons/Emoji.svg";
import Books from "../../../public/assets/icons/Books.svg";
import TemplateFeature from "../UI/TemplateFeature";

const features = [
  {
    id: 1,
    icon: Emoji,
    title: "کاملا رایگان ",
    description:
      "دانلود و استفاده از این قالب ها بدون هیچ هزینه ای امکان پذیر است .",
  },
  {
    id: 2,
    icon: Books,
    title: "تنوع گسترده قالب ها",
    description:
      "شامل انواع پروپوزال ، بیزنس پلن ، بیزنس مدل ، بوم ناب و بوم کسب و کار همراه با نسخه های متنوع از هر دسته هست . ",
  },
  {
    id: 3,
    icon: Document2,
    title: "متناسب برای انواعی از پروژه ها",
    description:
      "ایده آل برای پروژه های دانشگاهی ،ارائه های حرفه ای ، استارتاپ های دانشگاهی ، شرکت ها و کسب و کار های نو پا",
  },
  {
    id: 4,
    icon: Comment,
    title: "همراه با متن و ویدیو راهنما",
    description:
      "هر قالب دارای راهنمای داخلی است که به شما کمک میکند سریع تر و موثرتر از آن استفاده کنید.",
  },
  {
    id: 5,
    icon: Document2,
    title: "بازبینی تخصصی",
    description:
      "امکان بازبینی و بررسی قالب بعد از تکمیل شدن، ارائه پشتیبانی و پیشنهادات دقیق برای بهبود سند تکمیلی شما",
  },
  {
    id: 6,
    icon: Pen,
    title: "فرمت Word و کاملا قابل ویرایش ",
    description:
      "تمامی قالب ها در فرمت Word ارائه شده اند و میتوانید آن ها را به راحتی ویرایش کنید.",
  },
];

const TemplateFeatures = () => {
  return (
    <section className="mt-40 container">
      <h3 className="text-xl md:text-4xl text-center text-black font-semibold md:font-bold ">
        ویژگی های قالب های اکسینا
      </h3>

      <div className=" mt-24 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
        {features.map((feature) => (
          <TemplateFeature feature={feature} key={feature.id} />
        ))}
      </div>
    </section>
  );
};

export default TemplateFeatures;
