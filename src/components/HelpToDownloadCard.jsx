import React from 'react'
import BaseIcon from './icon/BaseIcon';

const HelpToDownloadCard  = ({className}) => {
    return(
        <div className={`fixed -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] ${className} z-40 rounded-4xl bg-[#FFF6FE] w-2/3 h-4/5 lg:h-fit overflow-y-scroll p-7 lg:p-10 shadow-lg`}>
            <div className='justify-between flex'>
                <h1 className='mb-3 lg:mb-0 lg:whitespace-nowrap font-extrabold text-base text-black'>
                راهنمای دانلود و استفاده از قالب‌های رایگان
                </h1>
                <div>
                    <BaseIcon id="Cross" size={40} fillColor='#000000' disableGradient={true}/>
                </div>
            </div>
            <p className='font-normal text-[13px] mb-4 text-title'>اکسین در این بخش، مجموعه‌ای از قالب‌های حرفه‌ای و استاندارد را برای دانلود رایگان در اختیار شما قرار می‌دهد تا بتوانید به‌راحتی و بدون هزینه از آن‌ها در پروژه‌های خود استفاده کنید.
                 این قالب‌ها با هدف افزایش بهره‌وری و صرفه‌جویی در زمان تهیه شده‌اند و برای دانشجویان، کسب‌وکارهای مختلف، استارتاپ‌ها، شرکت‌ها و سازمان‌ها مناسب هستند.
            </p>
            <h2 className='text-base font-bold mb-2 text-title'>  نحوه دانلود و استفاده</h2>
            <p className='mb-3 font-semibold text-[13px] leading-7 text-title'>
                1.قالب مورد نظر خود را جستجو کنید.
                <br />
                2.قالب دلخواه خود را از لیست قالب‌های پیشنهادی اکسین انتخاب کنید.
                <br />
                3.روی دکمه "دانلود" کلیک کنید و فایل را دریافت کنید.
                <br />
                4.فایل را با نرم‌افزار Microsoft Word باز کنید.
                <br />
                5.اطلاعات موردنظر خود را در تیترهای مشخص‌شده و با کمک توضیحات وارد کنید.
                <br />
                6.پس از ویرایش، فایل را ذخیره کرده و در پروژه‌های خود استفاده کنید.
            </p>
            <h2 className='text-base leading-8 font-bold text-[#B73131]'>نکات مهم</h2>
            <p className="font-semibold text-[14px] text-title mb-4">
                پوشش کامل تیترهای مهم اسناد تجاری:
                <span className='font-normal text-[13px] leading-5'> در طراحی این قالب‌ها تلاش شده تا تمام سرفصل‌های ضروری در اسناد تجاری گنجانده شود.</span>
            </p>
            
            <p className="font-semibold text-[14px] leading-5 text-title">
                به‌روزرسانی مداوم و اضافه شدن قالب‌های جدید:
                <span className='font-normal text-[13px]'> 
                قالب‌ها به‌صورت مرتب به‌روز می‌شوند و در آینده دسته‌بندی‌های جدیدی نیز به این مجموعه اضافه خواهد شد. پیشنهاد می‌کنیم هر از چند گاهی به این صفحه سر بزنید تا از آخرین به‌روزرسانی‌ها مطلع شوید.
                </span>
            </p>
            
        </div>
    );
};
export default HelpToDownloadCard;