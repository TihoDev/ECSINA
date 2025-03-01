import React from 'react'
import Navbar from '../Navbar'
import BaseIcon from '../icon/BaseIcon'


const HeaderPageTwo = () => {
  return (
    <header className='shadow-none lg:shadow-xl bg-white lg:rounded-bl-[180px] lg:rounded-br-[180px] lg:py-10 lg:pb-20'>
        <div className='lg:container lg:gap-x-12 lg:flex lg:items-center lg:justify-between'>
            <div>
                <div className='mb-0 lg:mb-12'>
                    <Navbar />
                </div>
                <h4 className='font-bold w-2/3 text-lg hidden lg:block'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</h4>
            </div>
            <div className='hidden lg:block'>
                <BaseIcon size={230} id="ExinIcon3" disableGradient={true} fillColor='#3E243C'/>
            </div>
        </div>
    </header>
  )
}

export default HeaderPageTwo