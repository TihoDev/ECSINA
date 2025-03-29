import React from "react";
import LinkButton from "@/components/UI/LinkButton";
import BaseIcon from "@/components/icon/BaseIcon";

function ProposalTable() {
  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="table border-separate border-spacing-y-1">
        {/* head */}
        <thead>
          <tr className="bg-[#ECE9EC] text-black text-center font-semibold">
            <th className="hover:underline cursor-pointer">عنوان پروپوزال</th>
            <th className="hover:underline cursor-pointer">توضیحات پروپوزال</th>
            <th className="hover:underline cursor-pointer">تاریخ انتشار</th>
            <th className="hover:underline cursor-pointer">عملیات</th>
          </tr>
        </thead>
        {/* body */}
        <tbody>
          <tr className="overflow-x-hidden whitespace-nowrap text-center font-normal hover:bg-[#E8E8E8] bg-[#F5F4F5] transition-colors">
            <td>لورم ایپسوم</td>
            <td>لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم</td>
            <td>Blue</td>
            <td className="flex items-center justify-center gap-x-2">
              <div>
                <LinkButton className="border-1 p-1 border-transparent hover:border-danger rounded-full cursor-pointer transition-colors">
                  <BaseIcon size={28} id="trash-x" disableGradient={true} />
                </LinkButton>
              </div>
              <div>
                <LinkButton className="border-1 p-1 border-transparent hover:border-black rounded-full cursor-pointer transition-colors">
                  <BaseIcon size={28} id="edit2" disableGradient={true} />
                </LinkButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProposalTable;
