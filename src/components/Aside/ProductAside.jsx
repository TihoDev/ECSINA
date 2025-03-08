import React from 'react'

//data = all categories
const ProductAside = ({style , data}) => {
  return (
    <aside className={style}>
        <h2 className="font-bold text-2xl mb-8 text-title">دسته بندی :</h2>
        <div className="flex flex-col items-center gap-y-4">
            {
                data.map(item => {
                    return (
                        <div key={item.id} className="w-full flex items-center justify-between">
                            <h2 className="text-base text-title">{item.title}</h2>
                            <h4 className="text-left xl:w-2/4 text-base text-title">{item.itemCount}</h4>
                        </div>
                    )
                })
            }
        </div>
    </aside>
  )
}

export default ProductAside