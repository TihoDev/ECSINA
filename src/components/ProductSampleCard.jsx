import React from 'react'
import BaseIcon from './icon/BaseIcon';
const ProductSampleCard = ({title,text,imageid}) => {
    return(
        <div className='w-[288px] h-[344px] rounded-4xl flex flex-col shadow-[0px_2px_4px_0px_#1E132840]'>
            <div className='w-[280] h-[192px]'>
                <img src={`${imageid}`} alt="" />
            </div>
            <div className='p-4'>
                <div className='flex flex-col w-[206px]'>
                    <h1 className='font-semibold text-2xl leading-9 mb-2'> {title}</h1>
                    <p className='font-normal text-base leading-6'>{text}</p>                    
                </div>
                <div className="mr-auto bg-white w-12 h-12 shadow-md rounded-2xl mt-2">
                    <div className="w-full h-full flex items-center justify-center">
                        <BaseIcon id="Arrow" size={18}/>
                    </div>
                </div>
            </div>
        </div>
    );
};export default ProductSampleCard