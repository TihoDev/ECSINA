import React from 'react'
import Navbar from '../Navbar'
import BaseIcon from '../icon/BaseIcon'

const HeaderSingleProduct = () => {
  return (
    <header className="lg:py-14 lg:bg-white lg:rounded-bl-[123px] lg:rounded-br-[123px] lg:shadow-xl">
        <div className="lg:container lg:flex lg:items-center lg:justify-between">
            <Navbar />
            <div className="hidden lg:block border-2 bg-gray-200">
                <BaseIcon id="ExinIcon3" size={60} fillColor="#1E1328"/>
            </div>
        </div>
    </header>
  )
}

export default HeaderSingleProduct