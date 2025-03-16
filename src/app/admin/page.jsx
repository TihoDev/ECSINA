import SideNav from "@/components/panel/SideNav"

const page = () => {
  return (
    <div className=" h-screen w-screen grid grid-cols-12">
      <aside className="col-span-3">
        <SideNav />
      </aside>
      <div className="col-span-9 pt-7 px-10 text-black">
        admin
      </div>
    </div> 
  )
}

export default page