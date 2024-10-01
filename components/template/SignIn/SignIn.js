"use client"
import React from 'react'
import styles from "./SignIn.module.css"
import Image from 'next/image';
import xtrim from "@/public/Products/xtrimVx.png"

function SignInPage() {
  return (
    <div className={styles.container}>
        <div className={styles.child}>
          <div className={`flex flex-col items-center`}>
            <h2>Gholamzadeh</h2>
            <p className={`my-4`}>به هلدینگ غلام زاده خوش آمدید</p>
            <input type="text" className={`w-[300px] mb-4 rounded-xl p-2 border-none outline-none bg-[#393939]`} />
            <button className={`text-[#FFFFFF] rounded-2xl bg-[#C38065] px-4 py-2 `}>ورود / عضویت</button>
            <p className={`text-[13px] mt-4`}>برای ورود و عضویت در سایت شماره همراه خود را وارد کنید</p>
          </div>
            <Image src={xtrim} width={500} height={600} alt="xtrim"  />
        </div>
    </div>
  )
}

export default SignInPage
