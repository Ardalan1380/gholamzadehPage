import React from 'react'

function Navbar() {
  return (
    <div className="h-[90px] w-full  bg-[#1C1C1C] flex justify-between">
        <div className="w-[100px] items-center justify-center bg-[#3E3E3E] h-full flex flex-col">
            <p className="text-[19px] text-white">هلدیـــنگ</p>
            <p className="text-[25px] text-white font-semibold">غلام زاده</p>
        </div>
        <div className="w-[600px] flex justify-around mx-auto items-center">
            <ul className="text-[#E9E9E9] flex justify-between w-full">
                <li>خانه</li>
                <li>محصولات</li>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>ثبت نام تست درایو</li>
                <li className="bg-[#C38065] p-1.5 text-[15px] rounded-lg font-semibold">پیش ثبت نام خودرو</li>
            </ul> 
        </div>
        <div className="flex justify-start w-[120px] items-center text-white p-2">
            <button className="bg-[#3E3E3E] p-1.5 text-[13px] rounded-lg ">
                ورود/ثبت نام
            </button>
        </div>
    </div>
  )
}

export default Navbar