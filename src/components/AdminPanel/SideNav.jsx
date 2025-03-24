"use client";
import BaseIcon from "../icon/BaseIcon";
import Link from "next/link";
import Paragraph from "../UI/Paragraph";

const sideNavLinks = [
  {
    id: 1,
    title: "پروپوزال ها",
    icon: "PanelIcon1",
    link: "/admin/proposal",
  },
  {
    id: 2,
    title: "مدیریت دسته بندی ها ",
    icon: "PanelIcon2",
    link: "/admin/category",
  },
];
const SideNav = () => {
  return (
    <div className="w-full h-full col-span-3 flex flex-col justify-between bg-[#3E243C]">
      <div>
        <div className="pt-7 pr-7 mb-12">
          <h2 className="font-black text-2xl">اکسین</h2>
        </div>
        <ul className="space-y-2">
          {sideNavLinks.map((item) => {
            return (
              <li key={item.id} className="py-3 pl-2 pr-8 cursor-pointer plum-gradient-hover transition-all ease ">
                <Link className="flex items-center gap-x-2" href={item.link}>
                  <BaseIcon id={item.icon} size={25} disableGradient={true} fillColor="#fff" />
                  <Paragraph>{item.title}</Paragraph>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button className="flex items-center self-center mb-4  gap-x-2 cursor-pointer">
        <BaseIcon id="Logout" disableGradient={true} fillColor="#fff" size={25} />
        <Paragraph className="font-xl font-normal">خروج از حساب</Paragraph>
      </button>
    </div>
  );
};

export default SideNav;
