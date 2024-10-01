import React from 'react'
import styles from "./Header.module.css"


function Header() {
  return (
    <div className={`${styles.container}`}>
        <div className={`flex flex-col`}>
            <h1 className="text-[50px] text-white font-semibold">درباره ما</h1>
            <p className="text-[22px] text-white text-center">هلدینگ غلام زاده</p>
        </div>
    </div>
  )
}

export default Header