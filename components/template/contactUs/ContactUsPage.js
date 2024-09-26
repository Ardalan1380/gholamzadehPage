"use client"
import React from 'react'
import googleMap from "@/public/googleMap.png"
import location from "@/public/location.png"
import website from "@/public/website.png"
import Page from "@/public/Page.png"
import instagram from "@/public/instagram.png"
import car from "@/public/car.png"
import phone from "@/public/phone.svg"
import Image from 'next/image'
import styles from "./ContactUsPage.module.css"
import { useRouter } from 'next/navigation'

function ContactUsPage({onLinkClick}) {
    const router = useRouter();
  return (
    <div className={`w-[390px] mt-[10] flex justify-between items-center ${styles.body}`}>

<div className="flex flex-col left-0">
        <div className={styles.side} onClick={() => onLinkClick('address')}>
            <div className="flex flex-col">
        <Image src={location} width={500} height={500} alt="side" className="w-[28px] h-[38px] relative" />
            <p className="text-[#C38065] text-[14px] font-peyda ">آدرس ها</p>
            </div>
        {/* <Image src={side2} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}
        {/* <Image src={location} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}

        </div> <div className={styles.side}>

        <div className="flex flex-col mx-auto justify-center">
        <Image src={googleMap} width={500} height={500} alt="side" className="w-[28px] mr-1 h-[38px] relative" />
            <p className="text-[#C38065] text-center text-[14px] font-peyda">گوگل مپ </p>
            </div>
        {/* <Image src={side2} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}
        {/* <Image src={location} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}

        </div>
            
         <div className={styles.side}>
        {/* <Image src={side2} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}
        {/* <Image src={location} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}
        <div className="flex flex-col" onClick={() => router.push("https://gholamzadeh.com") }>
        <Image src={website} width={500} height={500} alt="side" className="w-[38px] h-[38px] relative" />
            <p className="text-[#C38065] text-[14px] font-peyda">وبسایت</p>
            </div>
        </div>
        {/* <Image src={side} width={500} height={500} alt="side" className="w-[55px] h-[154px]" />
        <Image src={side} width={500} height={500} alt="side" className="w-[55px] h-[154px] " />
        <Image src={side} width={500} height={500} alt="side" className="w-[55px] h-[154px] " /> */}
        </div>  
        
        
        <div className='w-[390px] flex flex-col mt-[-200px] min-h-[100px]'>
            <div className="flex justify-center mx-auto">
                <p className="text-[#E8E8E8] font-peyda">
                    پیج اصلی گروه خودرویی
                </p>
                <span className="text-[#E8E8E8] mr-1 font-myFont2 font-semibold">غلام زاده </span>
            </div>
            <h1 className="text-[#C38065] text-center text-[60px] font-englishText">Gholamzadeh</h1>

                <div className="flex justify-center">
                <Image src={car} width={500} height={500} alt="side" className="w-[160px]" />
                </div>

                <div className="my-6">
                    <p className="text-[#C38065] text-center text-[35px] font-medium">۸</p>
                    <p className="text-[#C8C8C8] text-center font-peyda mt-[-3gpx] text-[13px]">نمایندگی فعال</p>
                </div>

                <div className="my-6">
                    <p className="text-[#C38065] text-[22px] font-medium font-peyda text-center">
                    چهل سال
                    </p>
                    <p className="text-[#C8C8C8] text-center mt-[-1px] font-peyda text-[13px]">سابقه کار</p>
                </div>

                <div className="my-6">
                    <p className="text-[#C38065] text-center text-[35px] font font-medium">فعال</p>
                    <p className="text-[#C8C8C8] text-center mt-[-5px] font text-[13px]">خدمات پس از فروش</p>
                </div>

                    <div className="mt-6">
                <p className="text-[#C8C8C8] text-center text-[28px] mt-[10px]  font-text">فراتر از محدودیت</p>
                    </div>

                {/* <div className="flex justify-center mx-auto min-h-[100px] items-end">
                <AboutUs />
                </div> */}



        </div>


        <div className="flex flex-col left-0 w-fit items-center min-h-[100px] ">
        <div className={styles.side2} onClick={() => onLinkClick('callUs')}>
        <div className="flex flex-col mr-[10px]">
        <Image src={phone} width={500} height={500} alt="side" className="w-[38px] h-[38px] " />
            <p className="text-[#C38065] text-center mt-1 text-[14px] font-peyda">تماس</p>
            </div>
        {/* <Image src={side2} width={500} height={500} alt="side" className="w-[55px] h-[154px] " /> */}

        </div>
        <div className={`${styles.side2} `} onClick={() => onLinkClick('instagram')}>
        {/* <Image src={side2} width={500} height={500} alt="side" className="w-[55px] h-[154px] " /> */}
        {/* <Image src={location} width={500} height={500} alt="side" className="w-[55px] h-[154px] " /> */}
        <div className="flex flex-col mr-[3px]">
        <Image src={instagram} width={500} height={500} alt="side" className="w-[38px] h-[38px] mr-1 " />
            <p className="text-[#C38065] text-center mt-2 text-[14px] font-peyda">اینستاگرام</p>
            </div>
        </div>
        <div className={styles.side2}  onClick={() => onLinkClick('aboutUs')}>
        {/* <Image src={side2} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}
        {/* <Image src={location} width={500} height={500} alt="side" className="w-[55px] h-[154px] relative" /> */}
        <div className="flex flex-col mr-[10px]">
        <Image src={Page} width={500} height={500} alt="side" className="w-[38px] h-[38px] " />
            <p className="text-[#C38065] text-center mt-2 text-[14px] font-peyda">درباره ما</p>
            </div>
        </div>

        </div>
            

    </div>
  )
}

export default ContactUsPage