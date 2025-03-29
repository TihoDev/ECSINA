"use client";
import Link from "next/link";
import Paragraph from "../UI/Paragraph";
import Image from "next/image";
import { usePathname } from "next/navigation";

const sideNavLinks = [
  {
    id: 1,
    title: "پروپوزال ها",
    icon: "/icons/admin-proposal.svg",
    link: "/admin/proposal",
  },
  {
    id: 2,
    title: "مدیریت دسته بندی ها ",
    icon: "/icons/admin_category.svg",
    link: "/admin/category",
  },
];
const SideNav = () => {
  const path = usePathname();
  console.log(path);
  return (
    <div className="w-full h-full col-span-3 flex flex-col justify-between bg-[#3E243C]">
      <div>
        <div className="pt-7 pr-7 mb-12">
          <h2 className="font-black text-2xl">اکسین</h2>
        </div>
        <ul className="space-y-2">
          {sideNavLinks.map((item) => {
            return (
              <li key={item.id} className={`py-3 pl-2 pr-8 cursor-pointer plum-gradient-hover  transition-all ease-linear ${path == item.link ? "plum-gradient" : "plum-gradient-hover"}  `}>
                <Link className="flex items-center gap-x-2" href={item.link}>
                  <Image alt="" src={item.icon} width={20} height={20} />
                  <Paragraph>{item.title}</Paragraph>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button onClick={() => document.getElementById("logout").showModal()} className="flex btn items-center self-start mr-8 mb-4   gap-x-2 cursor-pointer">
        <Image alt="" src={"/icons/Logout.svg"} width={20} height={20} />
        <Paragraph className="font-xl font-normal">خروج از حساب</Paragraph>
      </button>
      <dialog id="logout" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default SideNav;
