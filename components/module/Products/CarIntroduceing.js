import Image from 'next/image';
import React from 'react'
import xtrim from "@/public/Products/xtrimA.png";
import tiggo from "@/public/Products/tiggoS.png";
import lamari from "@/public/Products/lamari.png";
import fownix from "@/public/Products/fownix.png";
import mitsubishi from "@/public/Products/mitsubishi.png";
import styles from "./CarIntroduceing.module.css"
function CarIntroduceing() {
  return (
    <div className={`mt-20 flex flex-col w-[1531px] justify-center items-center mx-auto ${styles.container}`}>
        <div className={`w-full flex justify-around items-center`}>
            <div className={`flex flex-col justify-center  w-[782px] bg-[#171717] h-[550px]`}>
            <h4 className={`text-[#F1F1F1] text-[25px] mr-[130px]`}>لوکس ترین شاسی بلند ایران</h4>
            <p className={`w-[400px] mt-5 text-[16px] text-[#F1F1F1]  mr-[130px]`}
            >للـــــــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافــــیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اســـــــت            </p>
            <div className={`flex justify-center mx-auto`}>
            <button type="button" className={`w-[150px] text-[#F1F1F1] border border-[#707070] bg-[#C38065] rounded-xl mt-4 p-1`}>اطلاعات بیشتر</button>
            </div>
            </div>
            <Image src={xtrim} width={400} height={400} alt="luxe" className={`w-[782px] h-[550px]`} />
        </div>

        <div className={`w-full flex justify-around items-center`}>
        <Image src={tiggo} width={400} height={400} alt="luxe" className={`w-[782px] h-[550px]`} />

            <div className={`flex flex-col justify-center  w-[782px] bg-[#404040] h-[550px]`}>
            <h4 className={`text-[#F1F1F1] text-[25px] mr-[130px]`}>تیگو 7 پرو هیبرید</h4>
            <p className={`w-[400px] mt-5 text-[16px] text-[#F1F1F1] mr-[130px]`}>لـــــــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافــــیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اســـــــت</p>
            <div className={`flex justify-center mx-auto`}>
            <button type="button" className={`w-[150px] text-[#F1F1F1] border border-[#707070] bg-[#C38065] rounded-xl mt-4 p-1`}>اطلاعات بیشتر</button>
            </div>
            </div>
        </div>

        <div className={`w-full flex justify-around items-center`}>
            <div className={`flex flex-col justify-center  w-[782px] bg-[#171717] h-[550px]`}>
            <h4 className={`text-[#F1F1F1] text-[25px] mr-[130px]`}>لاماری ایما هیبرید</h4>
            <p className={`w-[400px] mt-5 text-[16px] text-[#F1F1F1]  mr-[130px]`}>لـــــــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافــــیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اســـــــت</p>
            <div className={`flex justify-center mx-auto`}>
            <button type="button" className={`w-[150px] text-[#F1F1F1] border border-[#707070] bg-[#C38065] rounded-xl mt-4 p-1`}>اطلاعات بیشتر</button>
            </div>
            </div>
            <Image src={lamari} width={400} height={400} alt="luxe" className={`w-[782px] h-[550px]`} />
        </div>

        <div className={`w-full flex justify-around items-center`}>
        <Image src={mitsubishi} width={400} height={400} alt="luxe" className={`w-[782px] h-[550px]`} />
            <div className={`flex flex-col justify-center w-[782px] bg-[#404040] h-[550px]`}>
            <h4 className={`text-[#F1F1F1] text-[25px] mr-[130px]`}>میتسوبیشی سامورایی</h4>
            <p className={`w-[400px] mt-5 text-[16px] text-[#F1F1F1] mr-[130px]`}>لـــــــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافــــیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اســـــــت</p>
            <div className={`flex justify-center mx-auto`}>
            <button type="button" className={`w-[150px] text-[#F1F1F1] border border-[#707070] bg-[#C38065] rounded-xl mt-4 p-1`}>اطلاعات بیشتر</button>
            </div>
        </div>
        </div>


        

        <div className={`w-full flex justify-around items-center`}>

            <div className={`flex flex-col justify-center w-[782px] bg-[#171717] h-[550px]`}>
            <h4 className={`text-[#F1F1F1] text-[25px]  mr-[130px]`}>آریزو 8</h4>
            <p className={`w-[400px] mt-5 text-[16px] text-[#F1F1F1] mr-[130px]`}>لـــــــورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافــــیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم اســـــــت</p>
            <div className={`flex justify-center mx-auto`}>
            <button type="button" className={`w-[150px] text-[#F1F1F1] border border-[#707070] bg-[#C38065] rounded-xl mt-4 p-1`}>اطلاعات بیشتر</button>
            </div>
        </div>

        <Image src={fownix} width={400} height={400} alt="luxe" className={`w-[782px] h-[550px]`} />

        </div>
       
    </div>
  )
}

export default CarIntroduceing;