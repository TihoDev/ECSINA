import React from 'react'
import Navbar from '../Navbar'
import BaseIcon from '../icon/BaseIcon'

const HeaderSingleProduct = () => {
  return (
    <header className="lg:py-14 lg:bg-white lg:rounded-bl-[123px] lg:rounded-br-[123px] lg:shadow-xl">
        <div className="lg:container lg:flex lg:items-center lg:justify-between">
            <Navbar />
            <div className="hidden lg:block">
                <BaseIcon id="ExinIcon3" size={130} fillColor="#1E1328" disableGradient={true}/>
            </div>
        </div>
    </header>
  )
}

export default HeaderSingleProduct