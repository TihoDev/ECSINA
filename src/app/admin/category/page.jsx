import AdminPanel from "@/components/admin/AdminPanel";
import Title from "@/components/ui/Title";
import React, { useState } from "react";

function Category() {
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <AdminPanel>
      <Title text={"مدیریت دسته بندی ها"} className="font-bold text-2xl" />
    </AdminPanel>
  );
}

export default Category;
