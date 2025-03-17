import SideNav from "@/components/panel/SideNav"
import Proposal from "./proposal/page"

const page = () => {
  return (
    <div className=" h-screen w-screen grid grid-cols-12">
      <aside className="col-span-3 overflow-y-hidden">
        <SideNav />
      </aside>
      <div className="col-span-9 pt-7 px-10 text-black">
        <Proposal></Proposal>
      </div>
    </div> 
  )
}

export default page