import SearchBar from "@/components/SearchBar/SearchBar";
import ProductAside from "@/components/Aside/ProductAside";
import AllProductsSection from "@/components/allProductsSection/AllProductsSection";
import HeaderPageTwo from "@/components/Header/HeaderPageTwo";

const asideData = [
    {
        id : 1,
        title : "بوم ناب",
        itemCount : "0"
    },
    {
        id : 2,
        title : "بوم كسب و كار",
        itemCount : "0"
    },
    {
        id : 3,
        title : "پروپوزال ها",
        itemCount : "0"
    },
    {
        id : 4,
        title : "بیزنس مدل",
        itemCount : "0"
    },
    {
        id : 5,
        title : "بیزنس پلن",
        itemCount : "0"
    },
];

function page() {
    return (
        <div className="overflow-hidden">
          <HeaderPageTwo />
            <main className="pt-12">
                <div className="container">
                    <section>
                        <SearchBar />
                    </section>
                    <section className="pt-12 mb-8 grid grid-cols-1 lg:gap-x-12 lg:grid-cols-4">
                        <ProductAside data={asideData} style="col-span-1 hidden lg:block"/>
                        <AllProductsSection style="col-span-3" />
                    </section>
                </div>
            </main>
        </div>
    )
}
 
export default page
