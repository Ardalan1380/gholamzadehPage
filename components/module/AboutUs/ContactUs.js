"use client"
import React from 'react'
import phone from "@/public/phone.svg"
import Image from 'next/image'
import Link from 'next/link'
import styles from "./ContactUs.module.css";
function ContactUs() {
  return (
    <div className={`w-[1500px] mt-[5rem] min-h-[297px] my-[3rem] flex justify-center flex-col border-2 mx-auto bg-[#404040] border-[#707070] rounded-[23px] p-5 ${styles.container}`}>
    <div className="flex mx-auto mt-2">
        <Image src={phone} width={400} height={400} alt="phone" className="w-[20px]  ml-2 " />
        <p className="text-center text-white font-peyda">راه های ارتباطی</p>
    </div>
        {/* <button className="bg-white w-fit" onClick={() =>  showInMapClicked(37.545378 , 45.106789)}>
            open
        </button> */}

    <div className={`grid grid-cols-2 mx-auto mt-5 w-full p-5 ${styles.main}`}>
        <div className={`w-full flex justify-center flex-col`}>
        <Link href="tel:0939792515" className={`w-full flex justify-center`}>
        <div className="w-[90%] h-[47px] border-[#707070] flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
            <p className="text-[#C38065] font-peyda">نمایندگی اکستریم</p>
            <p className="text-white font-peyda">09397925115</p>
        </div>
        </Link>

        <Link href="tel:0939692515" className={`w-full flex justify-center`}>
        <div className="w-[90%] h-[47px] border-[#707070] my-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
            <p className="text-[#C38065] font-peyda">نمایندگی فونیکس</p>
            <p className="text-white font-peyda">09396925115</p>
        </div>
        </Link>

        <Link href="tel:09921113685" className={`w-full flex justify-center`}>
        <div className="w-[90%] h-[47px] mb-4 border-[#707070] flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
            <p className="text-[#C38065] font-peyda">نمایندگی ام وی ام</p>
            <p className="text-white font-peyda">09921113685</p>
        </div>
        </Link>
        </div>
        
        <div className={`w-full`}>
        <Link href="tel:09144661508" className={`w-full flex justify-center`}>
        <div className="w-[90%] h-[47px] border-[#707070] mb-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
            <p className="text-[#C38065] font-peyda">نمایندگی کرمان موتور</p>
            <p className="text-white font-peyda">09144661508</p>
        </div>
        </Link>

        <Link href="tel:09144660715" className={`w-full flex justify-center`}>
        <div className="w-[90%] h-[47px] border-[#707070] mb-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
            <p className="text-[#C38065] font-peyda">نمایندگی میتسوبیشی</p>
            <p className="text-white font-peyda">09144660715</p>
        </div>
        </Link>

        <Link href="tel:09144660596" className={`w-full flex justify-center`}>
        <div className="w-[90%] h-[47px] border-[#707070] mb-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
            <p className="text-[#C38065] font-peyda">نمایندگی لاماری</p>
            <p className="text-white font-peyda">09144660596</p>
        </div>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default ContactUs    