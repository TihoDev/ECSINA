import React from "react";
import { redirect } from "next/navigation";
import SideNav from "@/components/panel/SideNav";

function AdminLayout({ children }) {
  // TODO: Check token and if not redirect to login
  const token = true;
  if (!token) redirect("/admin/login", "replace");

  return (
    <div className="grid h-screen w-screen grid-cols-12">
      <aside className="col-span-3">
        <SideNav />
      </aside>
      <div className="col-span-9 pt-7 px-10 text-black">
        {children}
      </div>
    </div> 
  )
}

export default AdminLayout;
