import React from "react"


function ProductCard({title,text}) {
    return (
        <div className="w-[334px] h-[304px] rounded-4xl shadow-[0px_3px_3px_0px_#3e243c80] p-5">
            <div className="flex flex-col justify-items-start">
                <div className="mb-4">
                     {/* svg is here */}
                </div>
                <div>
                    <h1 className="font-bold text-2xl leading-[35px] mb-4 text-(0,0,0,1)]">{title}</h1>
                </div>
            </div>
            <div>
                <p className="font-normal text-[20px] leading-[31px] text-[rgba(0,0,0,1)]">{text}</p>
            </div>
        </div>
    )
}

export default ProductCard
