import React from 'react'
import phone from "@/public/phone.svg"
import Image from 'next/image'
import Link from 'next/link'

function PhoneNumbers() {
    
  return (
    <div className="w-[370px] mt-[5rem] flex flex-col min-h-[297px] border-2 border-[#707070] rounded-xl">
            <div className="flex mx-auto mt-2">
                <Image src={phone} width={400} height={400} alt="phone" className="w-[20px]  ml-2 " />
                <p className="text-center text-white font-peyda">راه های ارتباطی</p>
            </div>
                {/* <button className="bg-white w-fit" onClick={() =>  showInMapClicked(37.545378 , 45.106789)}>
                    open
                </button> */}

            <div className="flex flex-col mx-auto mt-5 ">
                <Link href="tel:0939792515" >
                <div className="w-[340px] h-[47px] border-[#707070] flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
                    <p className="text-[#C38065] font-peyda">نمایندگی اکستریم</p>
                    <p className="text-white font-peyda">09397925115</p>
                </div>
                </Link>

                <Link href="tel:0939692515">
                <div className="w-[340px] h-[47px] border-[#707070] my-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
                    <p className="text-[#C38065] font-peyda">نمایندگی فونیکس</p>
                    <p className="text-white font-peyda">09396925115</p>
                </div>
                </Link>

                <Link href="tel:09921113685">
                <div className="w-[340px] h-[47px] mb-4 border-[#707070] flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
                    <p className="text-[#C38065] font-peyda">نمایندگی ام وی ام</p>
                    <p className="text-white font-peyda">09921113685</p>
                </div>
                </Link>

                <Link href="tel:09144661508">
                <div className="w-[340px] h-[47px] border-[#707070] mb-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
                    <p className="text-[#C38065] font-peyda">نمایندگی کرمان موتور</p>
                    <p className="text-white font-peyda">09144661508</p>
                </div>
                </Link>

                <Link href="tel:09144660715">
                <div className="w-[340px] h-[47px] border-[#707070] mb-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
                    <p className="text-[#C38065] font-peyda">نمایندگی میتسوبیشی</p>
                    <p className="text-white font-peyda">09144660715</p>
                </div>
                </Link>

                <Link href="tel:09144660596">
                <div className="w-[340px] h-[47px] border-[#707070] mb-4 flex items-center justify-between px-5 border-2 bg-[#393939] rounded-xl">
                    <p className="text-[#C38065] font-peyda">نمایندگی لاماری</p>
                    <p className="text-white font-peyda">09144660596</p>
                </div>
                </Link>
            </div>
    </div>  
  )
}

export default PhoneNumbers