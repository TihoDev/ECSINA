import React from "react";
import Title from "@/components/UI/Title";
import AdminButton from "@/components/UI/AdminButton";
import Input from "@/components/authForm/Input";
import BaseIcon from "@/components/icon/BaseIcon";

function Proposal() {
  return (
    <div className="w-full h-full">
      <div className="w-full mb-4 flex items-center justify-between">
        <Title className="font-bold text-2xl" text="همه پروپوزال ها" />
        <AdminButton className="border-1 border-[#C3C3C3] hover:border-black bg-white hover:bg-[#F2F5F7] cursor-pointer transition-colors py-3.5 px-8 rounded-2xl">افزودن پروپوزال</AdminButton>
      </div>

      <div className="w-full mb-3">
        <Input className="relative placeholder:font-normal w-full pl-6 pr-12 py-3 border-1 border-[#EBEBEB] rounded-2xl" placeholder="جست و جو"/>
        {/* <BaseIcon className="absolute top-0" id="Search" size={25} disableGradient={true} fillColor="#000"/> */}
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#ECE9EC] rounded-tr-2xl rounded-tl-2xl text-black mb-1">
            <tr className="text-center">
              <th className="hover:underline cursor-pointer">عنوان پروپوزال</th>
              <th className="hover:underline cursor-pointer">توضیحات پروپوزال</th>
              <th className="hover:underline cursor-pointer">تاریخ انتشار</th>
              <th className="hover:underline cursor-pointer">عملیات</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className="overflow-x-hidden whitespace-nowrap text-center hover:bg-[#E8E8E8] bg-[#F5F4F5] transition-colors">
              <td>لورم ایپسوم</td>
              <td>لورم ایپسوم  لورم ایپسوم  لورم ایپسوم لورم   ایپسوم</td>
              <td>Blue</td>
              <td className="flex items-center justify-center gap-x-2">
                <div>
                  <AdminButton className="border-1 p-1 border-transparent hover:border-danger rounded-full cursor-pointer transition-colors">
                    <BaseIcon size={28} id="trash-x" disableGradient={true} />
                  </AdminButton>
                </div>
                <div>
                  <AdminButton className="border-1 p-1 border-transparent hover:border-black rounded-full cursor-pointer transition-colors">
                    <BaseIcon size={28} id="edit2" disableGradient={true} />
                  </AdminButton>
                </div>
              </td>
            </tr>
            <tr className="overflow-x-hidden whitespace-nowrap text-center hover:bg-[#E8E8E8] bg-[#F5F4F5] transition-colors">
              <td>لورم ایپسوم</td>
              <td>لورم ایپسوم  لورم ایپسوم  لورم ایپسوم لورم   ایپسوم</td>
              <td>Blue</td>
              <td className="flex items-center justify-center gap-x-2">
                <div>
                  <AdminButton className="border-1 p-1 border-transparent hover:border-danger rounded-full cursor-pointer transition-colors">
                    <BaseIcon size={28} id="trash-x" disableGradient={true} />
                  </AdminButton>
                </div>
                <div>
                  <AdminButton className="border-1 p-1 border-transparent hover:border-black rounded-full cursor-pointer transition-colors">
                    <BaseIcon size={28} id="edit2" disableGradient={true} />
                  </AdminButton>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>



    </div>
  )
}

export default Proposal;
