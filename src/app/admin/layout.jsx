import React from "react";
import { redirect } from "next/navigation";

function AdminLayout({ children }) {
  // TODO: Check token and if not redirect to login
  const token = true;
  if (!token) redirect("/admin/login", "replace");

  return <div className="w-screen h-screen overflow-hidden bg-white">
    <div className="pt-7 pr-7">
      <h1 className="font-extrabold text-2xl text-black">اکسین</h1>
    </div>
    <div className="h-full">
      {children}
    </div>
  </div>;
}

export default AdminLayout;
