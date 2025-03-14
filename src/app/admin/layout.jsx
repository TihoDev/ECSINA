import React from "react";
import { redirect } from "next/navigation";

function AdminLayout({ children }) {
  // TODO: Check token and if not redirect to login
  const token = true;
  if (!token) redirect("/admin/login", "replace");

  return (
    <div>{children}</div>
  )
}

export default AdminLayout;
