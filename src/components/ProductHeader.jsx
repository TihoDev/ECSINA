import React from 'react'
import BaseIcon from './icon/BaseIcon'


const ProductHeader = () => {
  return (
    <header className='bg-white rounded-br-full rounded-bl-full shadow-md pt-12 pb-24'>
        <div className="container">
            <div className='grid grid-cols-2'>
                <div>
                    <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</h4>
                </div>
                <div className='text-left'>
                    <BaseIcon id="ExinIcon3" disableGradient={true} fillColor='#3E243C' size={120}/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default ProductHeader