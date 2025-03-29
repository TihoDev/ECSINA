import React from "react";
import SideNav from "./SideNav";

function AdminPanel({ children }) {
  return (
    <div className="min-h-screen gap-4 grid grid-cols-12">
      <SideNav />
      <div className="col-span-9 p-4  text-black">{children}</div>
    </div>
  );
}

export default AdminPanel;
