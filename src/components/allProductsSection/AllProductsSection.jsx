import React from 'react'
import ProductSampleCard from '../ProductSampleCard'

const productsSampleCard = [
    {
        id : 1,
        title : "تمام محصولات",
        text : "مشاهده تمام محصولات",
        imageId : "https://www.sportico.com/wp-content/uploads/2020/09/0911_IMG.jpg"
    },
    {
        id : 3,
        title : "تمام محصولات",
        text : "مشاهده تمام محصولات",
        imageId : "https://www.hubspot.com/hs-fs/hubfs/instagram-story-dimensions.png?width=350&name=instagram-story-dimensions.png"
    },
    {
        id : 4,
        title : "تمام محصولات",
        text : "مشاهده تمام محصولات",
        imageId : "https://www.hubspot.com/hs-fs/hubfs/instagram-story-dimensions.png?width=350&name=instagram-story-dimensions.png"
    },
]


const AllProductsSection = ({style}) => {
  return (
    <section className={style}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 lg:grid-cols-3'>
            {
                productsSampleCard.map((product) => (
                    <ProductSampleCard key={product.id} title={product.title} text={product.text} imageId={product.imageId}/>
                ))
            }
        </div>
    </section>
  )
}

export default AllProductsSection