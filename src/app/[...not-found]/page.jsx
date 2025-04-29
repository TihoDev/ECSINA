import Link from "next/link";

function notFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-y-5">
      <p className="text-center text-black text-2xl">صفحه مورد نظر پیدا نشد!</p>
      <Link href="/" className="text-center text-blue-500 text-xl">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}

export default notFound;
