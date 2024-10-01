import React from 'react'
import styles from './BottomNav.module.css'
function BottomNav() {
  return (
    <div className={`w-full h-[55px] flex justify-center`}>
        <div className={`w-[520px] h-[52px] bg-[#171717] bottom-0 fixed mb-5 rounded-[26px] flex justify-around items-center mx-auto`}>
            <p className={`text-[#E9E9E9] text-[9px]`}>ثبت نام خودرو</p>
            <p className={`text-[#E9E9E9] text-[9px]`}>ثبت نام خودرو</p>
            <p className={`text-[#E9E9E9] text-[9px] border-2 rounded-full pt-[20px]`}>ثبت نام خودرو</p>
            <p className={`text-[#E9E9E9] text-[9px]`}>ثبت نام خودرو</p>
            <p className={`text-[#E9E9E9] text-[9px]`}>ثبت نام خودرو</p>
        </div>  
    </div>
  )
}

export default BottomNav