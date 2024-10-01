// import brands from '@/utils/brandsImg'
import Image from 'next/image'
import React from 'react'
import styles from "./Brands.module.css";


import chery from "@/public/HomePage/logo/chery.png"
import Fownix from "@/public/HomePage/logo/Fownix.png"
import kmc from "@/public/HomePage/logo/kmc.png"
import Lamari from "@/public/HomePage/logo/Lamari.png"
import mitsubishi from "@/public/HomePage/logo/mitsubishi.png"
import mvm from "@/public/HomePage/logo/mvm.png"
import xtrim from "@/public/HomePage/logo/xtrim.png"

function Brands() {
    
  return (
    <div className={`w-full min-h-[282px] ${styles.mainContainer}`}>
        <div className="flex w-full justify-center">
            <div className={`flex justify-center w-full h-[152px] items-center bg-[#3E3E3E] ${styles.brandDiv}`}>
            <Image src={Fownix} width={400} height={400} alt={"hello"} className="w-[40%]" />
            </div>

            <div className={`flex justify-center w-full h-[152px] items-center bg-[#2D2D2D] ${styles.brandDiv}`}>
            <Image src={Lamari} width={400} height={400} alt={"hello"} className="w-[40%]" />
            </div>
            <div className={`flex justify-center w-full h-[152px] items-center bg-[#3E3E3E] ${styles.brandDiv}`}>
            <Image src={mitsubishi} width={400} height={400} alt={"hello"} className="w-[40%]" />
            </div>
            <div className={`flex justify-center w-full h-[152px] items-center bg-[#2D2D2D] ${styles.brandDiv}`}>
            <Image src={kmc} width={400} height={400} alt={"hello"} className="w-[40%]" />
            </div>

            <div className={`flex justify-center w-full h-[152px] items-center bg-[#3E3E3E] ${styles.brandDiv}`}>
            <Image src={mvm} width={400} height={400} alt={"hello"} className="w-[50%]" />
            </div>

            <div className={`flex justify-center w-full h-[152px] items-center bg-[#2D2D2D] ${styles.brandDiv}`}>
            <Image src={chery} width={400} height={400} alt={"hello"} className="w-[50%]" />
            </div>

            <div className={`flex justify-center w-full h-[152px] items-center bg-[#3E3E3E] ${styles.brandDiv}`}>
            <Image src={xtrim} width={400} height={400} alt={"hello"} className="w-[50%]" />
            </div>

        </div>
    </div>
  )
}

export default Brands