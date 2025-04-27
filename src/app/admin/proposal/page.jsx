import React from "react";
import Title from "@/components/UI/Title";
import SearchBar from "@/components/Proposals/SearchBar";
import ProposalTable from "@/components/Proposals/ProposalTable";
import LinkButton from "@/components/UI/LinkButton";
import AdminPanel from "@/components/AdminPanel/AdminPanel";

function Proposal() {
  const now = new Date();
  const proposalData = [
    { id: 1, title: "لورم ایپسوم", desc: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم", date: now },
    { id: 2, title: "لورم ایپسوم", desc: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم", date: now },
    { id: 3, title: "لورم ایپسوم", desc: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم", date: now },
    { id: 4, title: "لورم ایپسوم", desc: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم", date: now },
    { id: 5, title: "لورم ایپسوم", desc: "لورم ایپسوم لورم ایپسوم لورم ایپسوم لورم ایپسوم", date: now },
  ];
  return (
    <AdminPanel>
      <div className="w-full mb-4 flex items-center justify-between">
        <Title className="font-bold text-2xl" text="همه پروپوزال ها" />
        <LinkButton href={"/admin/proposal/new"} className="border-1 border-[#C3C3C3] hover:border-black bg-white hover:bg-[#F2F5F7] cursor-pointer transition-colors py-3.5 px-8 rounded-2xl">
          افزودن پروپوزال
        </LinkButton>
      </div>
      <SearchBar />
      <ProposalTable data={proposalData} />
    </AdminPanel>
  );
}

export default Proposal;
