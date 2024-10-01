"use client"
import React  from 'react';
import tiggo from "@/public/HomePage/carIntroduction/tiggo.png";
import tiggo8 from "@/public/HomePage/carIntroduction/tiggo8.png";
import raceCar from "@/public/HomePage/Notification/raceCar.png";
import signUp from "@/public/HomePage/Notification/signUp.png";
import sportCar from "@/public/HomePage/Notification/sport-car.png";
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import xtrimText from "@/public/HomePage/carIntroduction/xtrim-text.png";
import xtrim from "@/public/HomePage/carIntroduction/xtrim.png";
import styles from "./MobileNotidications.module.css";

function MobileNotidications() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1115, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     
  return (
    <>
    <div className={`min-h-[400px] flex flex-col justify-center items-center mx-auto w-[700px] ${styles.topSideContainer}`}>
        <div className={`w-[600px] h-[70px] rounded-3xl bg-[#474747]`}>
            <p className={`text-[#E9E9E9] text-center text-[14px] mt-2`}>اطلاعیه ها</p>
            <p className={`text-[#E9E9E9] text-[13px] text-center my-2`}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className={`w-[600px] flex justify-center items-center mx-auto my-2 ${styles.card}`}>  

            <div className={`w-[150px] h-[120px] rounded-3xl bg-[#474747] flex flex-col items-center justify-center mx-auto`}>
                    <Image src={raceCar} width={400} height={400} alt="signUp" className={`w-[60px] h-[25px]`} />
                    <p>ثبت نام تست درایو</p>
                </div>

                <div className={`w-[250px] h-[120px] rounded-3xl bg-[#474747] flex flex-col items-center justify-center mx-auto`}>
                    <Image src={sportCar} width={400} height={400} alt="signUp" className={`w-[70px] h-[60px]`} />
                    <p>پیش ثبت نام خودرو</p>
                </div> 

                <div className={`w-[150px] h-[120px] rounded-3xl bg-[#474747] flex flex-col items-center justify-center mx-auto`}>
                    <Image src={signUp} width={400} height={400} alt="signUp" className={`w-[60px] h-[50px]`} />
                    <p>شرایط ثبت نام</p>
                </div>  
            
        </div>
        <div className={`w-[600px] h-[60px] bg-[#C38065] rounded-3xl flex flex-col justify-center mx-auto items-center`}>
            <p>برنده های این هفته</p>
            <div className="w-full justify-around flex items-center">
                <p>امین زنده دل</p>
                <p>274*****21</p>
                <p>ارومیه</p>
                <p>تیگو 8 پرو مکس</p>
            </div>
        </div>
    </div>

    <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            arrows={false}>

    <div className="w-full min-h-[650px] bg-[#111111] flex justify-center mb-5 mx-auto items-center">
        <div className={`w-[400px] bg-[#474747] h-[450px] my-9 rounded-[40px] flex flex-col justify-start items-center ${styles.downSide}`}>
            <p className={`text-[#EBEBEB] text-[20px] my-[30px]`}>زمان باقی مانده تا شروع ثبت نام</p>
            <Image src={tiggo8} width={400} height={400} alt="tiggo" />
            <div className={`mt-5 flex justify-center`}>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-full">01</p>
                    <p className="text-center text-[17px]">روز</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-full mx-3">10</p>
                    <p className="text-center text-[17px]">ساعت</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-full mx-3">00</p>
                    <p className="text-center text-[17px]">دقیقه</p>
                    </div>
                </div>
                <Image src={tiggo} width={400} height={400} alt="tiggo" className={`w-[400px] mt-14`} />
        </div>

                
    </div>  

    <div className="w-full min-h-[650px] bg-[#111111] flex justify-center mb-5 mx-auto items-center">
        <div className={`w-[400px] bg-[#474747] h-[450px] my-9 rounded-[40px] flex flex-col justify-start items-center  ${styles.downSide}`}>
            <p className={`text-[#EBEBEB] text-[20px] my-[30px]`}>زمان باقی مانده تا شروع ثبت نام</p>
            <Image src={xtrimText} width={400} height={400} alt="tiggo" className="w-[200px] mb-5 " />
            <div className={`mt-5 flex justify-center`}>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-full">01</p>
                    <p className="text-center text-[17px]">روز</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-full mx-3">10</p>
                    <p className="text-center text-[17px]">ساعت</p>
                    </div>
                    <div className="flex flex-col">
                    <p className="bg-[#313131] w-fit px-5 py-3 text-[30px] font-semibold rounded-full mx-3">00</p>
                    <p className="text-center text-[17px]">دقیقه</p>
                    </div>
                </div>
                <Image src={xtrim} width={400} height={400} alt="tiggo" className={`w-[400px] mt-20`} />
                </div>

                
    </div>  
    </Carousel>

    </>
  )
}

export default MobileNotidications