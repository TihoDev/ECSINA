"use client"

import React, { useEffect, useState } from 'react'
import ProductSampleCard from '../ProductSampleCard'
import axios from 'axios'


const AllProductsSection = ({style}) => {
    const [products, setProducts]= useState()


    const getProducts = async () => { 
        try {
            const data = await axios.get("https://api.exin.exiness.com/api/products")
            setProducts(data.data)
        } catch (error) {
            console.log(error)
        }
     }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <section className={style}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 lg:grid-cols-3'>
            {
                products?.products && products?.products?.map((product) => (
                    <ProductSampleCard key={product.id} title={product.title} text={product.body} imageId={product.main_image}/>
                ))
            }
        </div>
    </section>
  )
}

export default AllProductsSection