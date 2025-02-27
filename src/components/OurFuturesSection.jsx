import React from 'react'
import BaseIcon from './icon/BaseIcon'
import FutureCard from './FutureCard'

const ourFuturesSectionData = [
    {
        id : 1,
        order : 1,
        title : "فرمت Word و کاملا قابل ویرایش ",
        desc : "تمامی قالب ها در فرمت Word ارائه شده اند و میتوانید آن ها را به راحتی ویرایش کنید.",
        svg : "Edit",
    },
    {
        id : 2,
        order : 2,
        title : "کاملا رایگان ",
        desc : "دانلود و استفاده از این قالب ها بدون هیچ هزینه ای امکان پذیر است .",
        svg : "CrossEyesLaugh",
    },
    {
        id : 3,
        order : 4,
        title : "تنوع گسترده قالب ها",
        desc : "شامل انواع پروپوزال ، بیزنس پلن ، بیزنس مدل ، بوم ناب و بوم کسب و کار همراه با نسخه های متنوع از هر دسته هست . ",
        svg : "ThreeBooks",
    },
    {
        id : 4,
        order : 5,
        title : "متناسب برای انواعی از پروژه ها",
        desc : "ایده آل برای پروژه های دانشگاهی ،ارائه های حرفه ای ، استارتاپ های دانشگاهی ، شرکت ها و کسب و کار های نو پا",
        svg : "Doc",
    },
    {
        id : 5,
        order : 6,
        title : "همراه با متن راهنما",
        desc : "هر قالب دارای راهنمای داخلی است که به شما کمک میکند سریع تر و موثرتر از آن استفاده کنید.",
        svg : "QuestionComment",
    },
]
const OurFuturesSection = () => {
  return (
    <section className='bg-red-100 py-12'>
        <div className='bg-white rounded-[80px] lg:rounded-[200px] shadow-xl'>
            <div className="container pt-20 pb-26">
                <h2 className='text-2xl lg:text-2xl font-bold text-center mb-12'>ویژگی های قالب های اکسین</h2>
                <div className='our-futures-section'>  
                    <div className='grid-cols-1 order-2 lg:order-3'>
                        <div>
                            <BaseIcon id="ExinIcon3" size={126} disableGradient={true} fillColor='#1E1328' className='lg:hidden'/>
                            <BaseIcon id="ExinIcon3" size={300} disableGradient={true} fillColor='#1E1328' className='hidden lg:block'/>
                        </div>
                    </div>
                    {
                        ourFuturesSectionData.map(data => {
                            return (
                                <FutureCard key={data.id} title={data.title} text={data.desc} svg={data.svg} className={`order-${data.order}`}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurFuturesSection