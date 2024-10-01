import React from 'react'
import styles from "./Navbar.module.css";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <>
    <div className={`h-[90px] w-full bg-[#1C1C1C] flex justify-between ${styles.mainContainer}`}>
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

    <div className={`hidden w-full min-h-[75px] ${styles.Mnav}`}>
        <div className="w-full bg-[#343434] h-[35px] py-1">
        <p className="text-center text-white text-[14px] pb-2">هلدینگ غلام زاده | فراتر از محدودیت</p>
        <div className="bg-[#5D5D5D] h-[74px] w-full min-h-[55px] p-4 flex justify-center items-center mx-auto">
        <label for="search" className="w-full bg-[#F3F3F3] rounded-lg border-none outline-none flex justify-center items-center" >
            <CiSearch className="text-[19px] w-[30px] h-[40px] " />
            <input id="search" type="text" className="w-full bg-[#F3F3F3] rounded-lg border-none outline-none p-3" placeholder="جستجوی پیشرفته" />
        </label>
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar