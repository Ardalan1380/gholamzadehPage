import Image from 'next/image'
import React from 'react'
import tiggo from "@/public/HomePage/carIntroduction/tiggo.png";
import tiggo8 from "@/public/HomePage/carIntroduction/tiggo8.png";

import raceCar from "@/public/HomePage/Notification/raceCar.png";
import signUp from "@/public/HomePage/Notification/signUp.png";
import sportCar from "@/public/HomePage/Notification/sport-car.png";

import styles from "./Notification.module.css"

function Notifications() {
  return (
    <div className="bg-gradient-to-r from-[#222222] to-[#6B6B6B] w-full min-h-[700px] flex justify-around items-center ">

            <div className={`w-[404px] h-[400px] bg-[#474747] flex flex-col items-center justify-start mx-auto rounded-xl ${styles.asideCartR}`}>
                <p className="text-[#E9E9E9] mt-[20px] ">زمان باقی مانده تا شروع ثبت نام</p>
                <div className=" h-[50px]">
                    <Image src={tiggo8} width={400} height={400} alt="tiggo text" className="w-[300px] h-[100px]" />
                </div>

                <div className={`mt-10 flex justify-center `}>
                    <div className={`flex flex-col ${styles.time}`}>
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-xl">00</p>
                    <p className="text-center">دقیقه</p>
                    </div>
                    <div className={`flex flex-col ${styles.time}`}>
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-xl mx-3">10</p>
                    <p className="text-center">دقیقه</p>
                    </div>
                    <div className={`flex flex-col ${styles.time}`}>
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-xl mx-3">1</p>
                    <p className="text-center">روز</p>
                    </div>
                </div>
                <Image src={tiggo} width={500} height={500} alt="tiggo" className="mt-10 w-[430px] h-[300px]" />
            </div>


        <div className={`w-[565px] h-[400px] flex flex-col items-center justify-start mx-auto rounded-xl ${styles.mainNotification}`}>
            <div className={`bg-[#474747] flex flex-col w-[665px] h-[122px] rounded-xl ${styles.first}`}>
                    <p className="text-center mt-3 text-[#E9E9E9]">اطلاعیه ها</p>
                    <p className="text-center text-[11px] mt-6 text-[#E9E9E9]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>  

            <div className={`flex mt-2 w-[665px] ${styles.second}`}>
            <div className="w-[182px] h-[123px] bg-[#474747] p-3 rounded-xl flex flex-col items-center justify-center mx-auto">
                    <Image src={raceCar} width={300} height={400} alt="signUp" className="w-[95px] h-[30px] " />
                    <p className="text-[15px] text-center">ثبت نام تست درایو</p>
                </div>

                <div className="w-[281px] h-[123px] bg-[#474747] p-3 rounded-xl flex flex-col items-center justify-center mx-auto">
                    <Image src={sportCar} width={300} height={400} alt="signUp" className="w-[90px] h-[68px] " />
                    <p className="text-[15px] text-center">پیش ثبت نام خودرو</p>
                </div>

                <div className="w-[182px] h-[123px] bg-[#474747] p-3 rounded-xl flex flex-col items-center justify-center mx-auto">
                    <Image src={signUp} width={300} height={400} alt="signUp" className="w-[60px] h-[48px] " />
                    <p className="text-[15px] text-center">شرایط پیش ثبت نام</p>
                </div>

            </div>

            <div className={`w-[665px] h-[104px] bg-[#C38065] rounded-[45px] ${styles.third} mt-5`}>
                <p className="text-[#E9E9E9] text-center text-[18px] font-semibold">برنده های این هفته</p>
                <div className="w-full justify-around flex items-center mt-5">
                    <p className="text-[#E9E9E9] text-[18px] font-medium">امین زنده دل</p>
                    <p className="text-[#E9E9E9] text-[18px] font-medium">274*****21</p>
                    <p className="text-[#E9E9E9] text-[18px] font-medium">ارومیه</p>
                    <p className="text-[#E9E9E9] text-[18px] font-medium">تیگو 8 پرو مکس</p>
                </div>
            </div>  
        </div>


        <div  className={`w-[404px] h-[400px] bg-[#474747] flex flex-col items-center justify-start mx-auto rounded-xl ${styles.asideCartL}`}>
                <p className="text-[#E9E9E9] mt-[20px] ">زمان باقی مانده تا شروع ثبت نام</p>
                <div className=" h-[50px]">
                    <Image src={tiggo8} width={400} height={400} alt="tiggo text" className="w-[300px] h-[100px]" />
                </div>

                <div className={`mt-10 flex justify-center ${styles.time}`}>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-xl">00</p>
                    <p className="text-center">دقیقه</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-xl mx-3">10</p>
                    <p className="text-center">دقیقه</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-xl mx-3">1</p>
                    <p className="text-center">روز</p>
                    </div>
                </div>
                <Image src={tiggo} width={500} height={500} alt="tiggo" className="mt-10 w-[430px] h-[300px]" />
        </div>
            
    </div>
  )
}

export default Notifications