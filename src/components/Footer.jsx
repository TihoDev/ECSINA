import React from 'react'

const Footer = () => {
  return (
    <footer
      className="shadow-gradient bg-[radial-gradient(circle_at_center,_rgb(255,255,255)_30%,_#f7fafc_80%)] rounded-t-xl relative py-10 px-6 text-gray-700 mt-20 shadow-md before:content-[''] before:absolute before:top-[-35px] before:left-1/2 before:w-[85px] before:h-[95px] before:bg-[#f7fafc] before:rounded-full before:transform before:-translate-x-1/2 "
    >
      {/* <!-- دکمه بازگشت --> */}
      <div
        className="bg-rainbow-gradient absolute -top-7 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-16 h-16 rounded-full"
      >
        <span className="text-xl text-black font-bold">⬆️</span>
      </div>

      {/* <!--  footer content --> */}
      <div
        className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-evenly items-start"
      >
        {/* <!-- links--> */}
        <div
          className="w-full flex justify-around text-sm text-gray-800 text-right"
        >
            <div>
                <h3 className="font-semibold mb-3 text-lg">دسترسی سریع</h3>
                <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500">محصولات ما</a></li>
                <li><a href="#" className="hover:text-purple-500">درباره‌ی ما</a></li>
                <li><a href="#" className="hover:text-purple-500">تماس با ما</a></li>
                </ul>
            </div>
            <div>
                <h3 className="font-semibold mb-3 text-lg">دسته بندی ها</h3>
                <ul className="space-y-2">
                <li><a href="#" className="hover:text-purple-500">بوم تاپ</a></li>
                <li>
                    <a href="#" className="hover:text-purple-500">بوم کسب و کار</a>
                </li>
                <li><a href="#" className="hover:text-purple-500">پریزنش مدل</a></li>
                <li><a href="#" className="hover:text-purple-500">پریزنش پلن</a></li>
                <li><a href="#" className="hover:text-purple-500">پروفایل ها</a></li>
                </ul>
            </div>
        </div>
        {/* <!-- form--> */}
        <div className="w-full">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <p className="text-gray-800">جدیدترین قالب‌های ما را از دست نده</p>
          </div>
          <div
            className="flex items-center bg-white shadow-md rounded-full overflow-hidden p-1 border border-gray-300 max-w-xl"
          >
            <input
              type="email"
              placeholder="ایمیل"
              className="flex-1 px-4 py-2 focus:outline-none border-none placeholder:text-right"
            />
            <button className="bg-purple-950 text-white px-6 py-2 rounded-full">
              ارسال
            </button>
          </div>
        </div>
      </div>

      {/* <!-- icon --> */}
      <div className="mt-12 text-center flex justify-center items-center gap-7">
        <div className="flex justify-center space-x-6">
          <p className="mb-4 text-gray-800 font-medium pt-3">با ما در ارتباط باشید</p>
          <a
            href="#"
            className="bg-purple-950 text-white p-3 rounded-full text-lg w-12 h-12 flex items-center justify-center shadow-lg"
            >g</a>
          <a
            href="#"
            className="bg-purple-950 text-white p-3 rounded-full text-lg w-12 h-12 flex items-center justify-center shadow-lg"
            >g</a>
          <a
            href="#"
            className="bg-purple-950 text-white p-3 rounded-full text-lg w-12 h-12 flex items-center justify-center shadow-lg"
            >g</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer