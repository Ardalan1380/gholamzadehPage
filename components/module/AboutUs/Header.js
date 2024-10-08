import React from 'react'
import styles from "./Header.module.css"
import xtrim from "@/public/aboutUs/xtrim.png"
import Image from 'next/image'

function Header() {
  return (
    // <div className={`
    // ${styles.container}
      
    // `}>
    //     <Image src={xtrim} width={400} height={400} alt={"tiggo"} className={`w-[843px] h-[415px] `} />

    //     {/* <div className={`flex flex-col`}>
    //         <h1 className="text-[50px] text-white font-semibold">درباره ما</h1>
    //         <p className="text-[22px] text-white text-center">هلدینگ غلام زاده</p>
    //     </div> */}
    // </div>
    <div className={`w-full  min-h-[600px] flex mx-auto ${styles.Container}`}>
        <Image src={xtrim} width={400} height={400} alt={"xtrim"} className={`w-full relative flex justify-center h-[415px] ${styles.images}`} />
        <div className={`flex flex-col absolute justify-center w-full items-center mt-[130px] ${styles.text}`}>
        <h1 className="text-[50px] text-white font-semibold">درباره ما</h1>
        <p className="text-[22px] text-white text-center">هلدینگ غلام زاده</p>
         </div> 
    </div>
  )
}

export default Header