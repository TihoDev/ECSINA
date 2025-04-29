import useProduct from "@/hooks/useProduct";

export const metadata = {
  title: "صفحه محصول | اکسین",
  description: "صفحه محصول | اکسین",
};

const LoadingIndicator = () => (
  <div className="flex justify-center items-center py-4">
    <div className="w-[40px] h-[40px] rounded-full border-4 border-black border-t-transparent animate-spin"></div>
  </div>
);

function Page({ params }) {
  const { product: productId } = params;
  const { product, error, isLoading } = useProduct(productId);

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return <div></div>;
}

export default Page;
