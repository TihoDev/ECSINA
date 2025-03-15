import BaseIcon from '../icon/BaseIcon'

const sideNav = () => {
  return (
    <div className='w-full h-full flex flex-col justify-between bg-[#3E243C]'>
        <div>
            <div className='pt-7 pr-7 mb-12'>
                <h2 className='font-black text-2xl'>اکسین</h2>
            </div>
            <ul className='space-y-2'>
                <li className='flex items-center gap-x-2 py-3 pl-2 pr-8 cursor-pointer hover:bg-gray-400 duration-200'>
                    <BaseIcon id="PanelIcon1" size={25} disableGradient={true} fillColor='#fff'/>
                    <p>پروپوزال ها</p>
                </li>
                <li className='flex items-center gap-x-2 py-3 pl-2 pr-8 cursor-pointer hover:bg-gray-400 duration-200'>
                    <BaseIcon id="PanelIcon2" size={25} disableGradient={true} fillColor='#fff'/>
                    <p> مدیریت دسته بندی ها </p>
                </li>
            </ul>
        </div>

        <div className='pb-12 pr-8'>
            <button className='flex items-center gap-x-2 cursor-pointer'>
                <BaseIcon id="Logout" disableGradient={true} fillColor='#fff' size={25}/>
                <p className='font-xl font-normal'>خروج از حساب</p>
            </button>
        </div>
    </div>
  )
}

export default sideNav