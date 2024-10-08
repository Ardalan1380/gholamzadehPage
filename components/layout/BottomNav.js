import React from 'react';
import styles from './BottomNav.module.css';
import Image from 'next/image';
import login from "@/public/menu/login.svg";
import raceCar from "@/public/menu/raceCar.svg";
import Home from "@/public/menu/home.svg";
import products from "@/public/menu/products.svg";
import more from "@/public/menu/more.svg";
import Link from 'next/link';

function BottomNav() {
  return (
    <div className={`w-full h-[55px] ${styles.container} justify-center hidden`}>

        <div className={`w-[520px] h-[72px] bg-[#171717] bottom-0 fixed mb-5 rounded-[26px] flex justify-around items-center mx-auto ${styles.main}`}>
            <div className={'flex flex-col items-center '}>
              <Image src={login} width={400} heigth={400} className={`w-[30px]`} />
            <p className={`text-[#E9E9E9] text-[10px]`}>ثبت نام خودرو</p>
            </div>

            <div className={`flex flex-col items-center `}>
              <Image src={raceCar} width={400} heigth={400} className={`w-[30px] h-[20px] ${styles.race}`} />
            <p className={`text-[#E9E9E9] text-[10px]`}> تست درایو</p>
            </div>
            <Link href={`/`}>
            <div className={`flex flex-col items-center w-[80px] h-[80px] mt-[-20px] bg-[#171717] justify-center border-2 border-[#5B5B5B] rounded-[50%] p-2  ${styles.Home}`}>
              <Image src={Home} width={400} heigth={400} className={`w-[30px] h-[30px]`} />
            <p className={`text-[#E9E9E9] text-[10px]`}>خانه</p>
            </div>
            </Link>
            
            <Link href={`/products`}>
            <div className={'flex flex-col items-center '}>
              <Image src={products} width={400} heigth={400} className={`w-[30px] `} />
            <p className={`text-[#E9E9E9] text-[10px]`}>محصولات</p>
            </div>
            </Link>

            <div className={'flex flex-col items-center '}>
              <Image src={more} width={400} heigth={400} className={`w-[30px] h-[20px]`} />
            <p className={`text-[#E9E9E9] text-[10px] `}>سایر موارد</p>
            </div>

        </div>  
    </div>
  )
}

export default BottomNav