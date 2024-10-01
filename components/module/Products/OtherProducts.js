'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import styles from "./OtherProducts.module.css"
import Image from "next/image";
import x55 from "@/public/Products/x55.png"
function OtherProducts() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 1730 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 1730, min: 1400 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1400, min: 900 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 900, min: 0 },
          items: 2
        }
      };
      
  return (
    <div className={`w-[1731px] min-h-[457px] flex flex-col my-[20px] mx-auto ${styles.container}`}>
        <p className={`text-[30px] text-[#F1F1F1] font-semibold mr-10`}>سایر محصولات</p>
        <div className={`mt-10`}>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            infinite={true}
            arrows={false}>
                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1]`}>مشاهده</button>
                </div>  


                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1]`}>مشاهده</button>
                </div>  


                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1] `}>مشاهده</button>
                </div>  


                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1] `}>مشاهده</button>
                </div>  



                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1] `}>مشاهده</button>
                </div>  



                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1]`}>مشاهده</button>
                </div>  


                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1]`}>مشاهده</button>
                </div>  

                <div className={`flex flex-col w-[334px] h-[447px] rounded-[40px] bg-[#2D2D2D] mx-auto items-center ${styles.cart}`}>
                    <Image src={x55} width={500} height={400} alt="x55" className={`w-[344px] h-[244px] mt-0`} />
                    <p className={`text-[#F1F1F1] text-[20px] font-semibold`}>ام وی ام کــــــــراس</p>

                    <p className={`text-[#F1F1F1] text-[17px] mt-10 text-center leading-9 w-[75%] ${styles.text}`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با 
                    </p>
                    <button className={`w-[181px] h-[31px] text-center bg-[#C38065] mt-[10px] rounded-xl text-[#F1F1F1]`}>مشاهده</button>
                </div>  
            </Carousel>

        </div>
    </div>
  )
}

export default OtherProducts