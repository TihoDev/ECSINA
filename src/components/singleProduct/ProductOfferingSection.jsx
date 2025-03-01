import React from 'react'
import ProductSampleCard from '../ProductSampleCard'

const ProductOfferingData = [
  {
    id : 1,
    title : "بوم كسب و كار",
    desc : "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl : "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
  },
  {
    id : 2,
    title : "بوم كسب و كار",
    desc : "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl : "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
  },
  {
    id : 3,
    title : "بوم كسب و كار",
    desc : "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl : "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
  },
  {
    id : 4,
    title : "بوم كسب و كار",
    desc : "ابزاری برای تجزیه و تحلیل و بهینه سازی مدل های کسب و کار است .",
    imgUrl : "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
  },
]

const ProductOfferingSection = () => {
  return (
    <div className='container mb-12'>
        <h2 className='text-center font-extrabold text-2xl mb-8'>قالب های پیشنهادی</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-x-4 xl:gap-x-8'>
          {
            ProductOfferingData.map(item => {
              return (
                <ProductSampleCard key={item.id} title={item.title} text={item.desc} imageId={item.imgUrl}/>
              )
            })
          }
        </div>
    </div>
  )
}

export default ProductOfferingSection