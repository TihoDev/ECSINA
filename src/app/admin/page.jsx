import { redirect } from "next/navigation";

const page = () => {
  return redirect("/admin/proposal", "push");
};

export default page;
