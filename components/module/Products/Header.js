import React from 'react'
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={`min-h-[700px] ${styles.container}`}>
        <div className={`flex justify-center flex-col mx-auto items-center`}>
            <h1 className={`text-[#F1F1F1] text-[55px] font-semibold mt-[100px]`}>هلدینگ غلام زاده</h1>
            <p className="text-[#F1F1F1] text-[25px]">ـــــــ فروش و خدمات پس از فروش ــــــ</p>
        </div>  
    </div>
  )
}

export default Header