"use client"
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./HomeBlogs.module.css";
//img
import first from "@/public/HomePage/ReadAble/first.png"
import second from "@/public/HomePage/ReadAble/second.png"
import third from "@/public/HomePage/ReadAble/third.png"
import Image from 'next/image';

function HomeBlogs() {
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
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };
      
  return (
    <div className="w-full h-[550px] mx-auto my-5">
        <div className={`w-[1731px] h-[457px] flex flex-col mx-auto ${styles.container}`}>
        <p className="text-[#E9E9E9] text-[25px] font-medium">خواندنی ها</p>
        <div className="w-full mx-auto mt-10">
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            arrows={false}>
                <div className={`w-[531px] h-[450px] rounded-3xl bg-[#222222] flex flex-col ${styles.CartContainer}`}>
                    <Image src={first} width={400} height={400} alt="blogs" className="w-[631px]" />
                    <h4 className="text-[#EAEBEC] text-right p-4">لورم ایپسوم متن ساختگی</h4>
                    <p className="text-[#C5C5C5] text-right p-4">لــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ســــتون و سطرآنچنان که لازم است، و بـــرای شــرایط فــــعلی تـــکنولوژی مورد نیاز، و کـــاربردهای متنوع با هدف بهبود ابـــزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و مــتخصصان را می طلبد، تا بـا نرم افزارها شناخت بیشتری را برای طراحان</p>
                </div>

                <div className={`w-[531px] h-[450px] rounded-3xl bg-[#222222] flex flex-col ${styles.CartContainer}`}>
                    <Image src={second} width={400} height={400} alt="blogs" className="w-[631px]" />
                    <h4 className="text-[#EAEBEC] text-right p-4">لورم ایپسوم متن ساختگی</h4>
                    <p className="text-[#C5C5C5] text-right p-4">لــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ســــتون و سطرآنچنان که لازم است، و بـــرای شــرایط فــــعلی تـــکنولوژی مورد نیاز، و کـــاربردهای متنوع با هدف بهبود ابـــزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و مــتخصصان را می طلبد، تا بـا نرم افزارها شناخت بیشتری را برای طراحان</p>
                </div>

                <div className={`w-[531px] h-[450px] rounded-3xl bg-[#222222] flex flex-col ${styles.CartContainer}`}>
                    <Image src={third} width={400} height={400} alt="blogs" className="w-[631px]" />
                    <h4 className="text-[#EAEBEC] text-right p-4">لورم ایپسوم متن ساختگی</h4>
                    <p className="text-[#C5C5C5] text-right p-4">لــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ســــتون و سطرآنچنان که لازم است، و بـــرای شــرایط فــــعلی تـــکنولوژی مورد نیاز، و کـــاربردهای متنوع با هدف بهبود ابـــزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و مــتخصصان را می طلبد، تا بـا نرم افزارها شناخت بیشتری را برای طراحان</p>
                </div>
            </Carousel>
        </div>
        </div>
    </div>
  )
}

export default HomeBlogs