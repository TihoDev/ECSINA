import InputPassword from "@/components/InputPassword"

const page = () => {
  return (
    <form className='w-[450px] h-[450px] border-1 border-[#D2D2D2] rounded-xl bg-[#F2F5F7] fixed left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2'>
        <div className='translate-y-[20%] pt-5 px-12'>
            <h2 className='text-black font-bold text-xl mb-12'>ورود به حساب</h2>

            <div className='space-y-4 mb-6'>
                <input type="text" className='bg-white block border-1 w-full border-[#D2D2D2] rounded-lg placeholder:text-[#8C9197] text-black py-3 px-2.5 font-normal text-sm focus:outline-0' placeholder='نام کاربری'/>

                <InputPassword />
            </div>

            <button type='submit' className='text-white py-2.5 w-full bg-purple-gradient rounded-lg'>ورود</button>
        </div>
    </form>
  )
}

export default page