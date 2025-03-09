import SearchBar from "@/components/SearchBar/SearchBar";
import ProductAside from "@/components/Aside/ProductAside";
import AllProductsSection from "@/components/allProductsSection/AllProductsSection";
import HeaderPageTwo from "@/components/Header/HeaderPageTwo";

const categories = [
  {
    id: 1,
    title: "بوم ناب",
    slug: "بوم ناب",
    sub: [],
  },
  {
    id: 2,
    title: "بوم کسب و کار",
    slug: "بوم کسب و کار",
    sub: [],
  },
  {
    id: 3,
    title: "پروپوزال",
    slug: "پروپوزال",
    sub: [
      {
        id: 6,
        title: "پروپوزال تجاری",
        slug: "business-proposal",
      },
      {
        id: 7,
        title: "پروپوزال پژوهشی",
        slug: "research-proposal",
      },
      {
        id: 8,
        title: "پروپوزال سرمایه‌گذاری",
        slug: "investment-proposal",
      },
      {
        id: 9,
        title: "پروپوزال ایده",
        slug: "idea-proposal",
      },
      {
        id: 10,
        title: "پروپوزال مشارکت بین‌المللی",
        slug: "international-partnership-proposal",
      },
      {
        id: 11,
        title: "پروپوزال غیرانتفاعی",
        slug: "nonprofit-proposal",
      },
      {
        id: 12,
        title: "پروپوزال مشاوره",
        slug: "consulting-proposal",
      },
      {
        id: 13,
        title: "پروپوزال توسعه محصول",
        slug: "product-development-proposal",
      },
    ],
  },
  {
    id: 4,
    title: "بیزینس مدل",
    slug: "بیزینس مدل",
    sub: [
      {
        id: 14,
        title: "بیزینس مدل شرکتی",
        slug: "corporate-business-model",
      },
      {
        id: 15,
        title: "بیزینس مدل استارتاپی",
        slug: "startup-business-model",
      },
      {
        id: 16,
        title: "بیزینس مدل ایده اولیه",
        slug: "initial-idea-business-model",
      },
      {
        id: 17,
        title: "بیزینس مدل سازمانی",
        slug: "organizational-business-model",
      },
      {
        id: 18,
        title: "بیزینس مدل تولیدی",
        slug: "manufacturing-business-model",
      },
      {
        id: 19,
        title: "بیزینس مدل نوآوری-دانش بنیان",
        slug: "innovation-knowledge-based-business-model",
      },
      {
        id: 20,
        title: "بیزینس مدل کسب و کار دیجیتال",
        slug: "digital-business-model",
      },
      {
        id: 21,
        title: "بیزینس مدل خرده‌فروشی",
        slug: "retail-business-model",
      },
      {
        id: 22,
        title: "بیزینس مدل اجتماعی",
        slug: "social-business-model",
      },
      {
        id: 23,
        title: "بیزینس مدل بین المللی",
        slug: "international-business-model",
      },
    ],
  },
  {
    id: 5,
    title: "بیزینس پلن ",
    slug: "بیزینس پلن ",
    sub: [
      {
        id: 24,
        title: "بیزینس پلن استراتژیک",
        slug: "strategic-business-plan",
      },
      {
        id: 25,
        title: "بیزینس پلن تک صفحه ای",
        slug: "one-page-business-plan",
      },
      {
        id: 26,
        title: "بیزینس پلن ناب",
        slug: "lean-business-plan",
      },
      {
        id: 27,
        title: "بیزینس پلن عملیاتی",
        slug: "operational-business-plan",
      },
      {
        id: 28,
        title: "بیزینس پلن سنتی",
        slug: "traditional-business-plan",
      },
      {
        id: 29,
        title: "بیزینس پلن دیجیتال",
        slug: "digital-business-plan",
      },
      {
        id: 30,
        title: "بیزینس پلن مالی",
        slug: "financial-business-plan",
      },
      {
        id: 31,
        title: "بیزینس پلن اجتماعی",
        slug: "social-business-plan",
      },
      {
        id: 32,
        title: "بیزینس پلن فناورانه",
        slug: "technological-business-plan",
      },
      {
        id: 33,
        title: "بیزینس پلن جغرافیایی",
        slug: "geographical-business-plan",
      },
      {
        id: 34,
        title: "بیزینس پلن تجربی",
        slug: "experimental-business-plan",
      },
      {
        id: 35,
        title: "بیزینس پلن داخلی",
        slug: "internal-business-plan",
      },
      {
        id: 36,
        title: "بیزینس پلن جذب سرمایه",
        slug: "investment-business-plan",
      },
    ],
  },
];

function page() {
  return (
    <div className="overflow-x-hidden">
      <HeaderPageTwo />
      <main className="pt-12">
        <div className="container">
          <section>
            <SearchBar />
          </section>
          <section className="pt-12 mb-8 grid grid-cols-1 lg:gap-x-12 lg:grid-cols-4">
            <ProductAside
              data={categories}
              style="col-span-1 hidden lg:block"
            />
            <AllProductsSection style="col-span-3" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default page;
