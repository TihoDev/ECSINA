import BaseIcon from "./icon/BaseIcon"

function Navbar() {
    return (
        <div className="bg-section-background h-[90px] rounded-b-[81px] shadow-2xl">
        <BaseIcon
          id="Menu"
          size={50}
          disableGradient={true}
          fillColor="#000"
        />
      </div>
    )
}

export default Navbar
