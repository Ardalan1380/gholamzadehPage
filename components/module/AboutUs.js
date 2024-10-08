import React from 'react'
import info from "@/public/info.png";
import Image from 'next/image';

function AboutUs() {
  return (
    <div className="mt-[7rem] mb-7 w-[370px] mx-auto flex flex-col min-h-[155px] border border-[#707070] bg-[#404040] rounded-2xl">
        <div className="flex mx-auto mt-2">
        <Image src={info} width={400} height={400} alt="phone" className="w-[20px] ml-1 " />
        <p className="text-center text-white ">درباره ما</p>
        </div>
        <div className=" w-[336px] flex mx-auto mt-3">
            <p className="text-[#C8C8C8] text-center  text-[13px]">گروه خودرویی غلام زاده، نامی آشنا برای دارندگان خودرو های چینی در ارومیه، با سابقه ای 40 ساله در فروش و خدمات پس از فروش خودرو های چینی به عنوان مرجعی قابل اعتماد در این زمینه شناخته می شود.ما در گروه خودرویی غلام زاده با تعهد در به ارائه بهترین ها، همواره در تلاشیم تا نیاز های مشتریان خود را به نحو احسن برآورده سازیم.</p>
        </div>
    </div>
  )
}

export default AboutUs