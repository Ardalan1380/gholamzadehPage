import React from 'react'
import lamari from "@/public/HomePage/carIntroduction/lamari.png";
import lamariText from "@/public/HomePage/carIntroduction/lamari-text.png";
import xtrimText from "@/public/HomePage/carIntroduction/xtrim-text.png";
import xtrim from "@/public/HomePage/carIntroduction/xtrim.png";
import tiggo from "@/public/HomePage/carIntroduction/tiggo.png";
import tiggo8 from "@/public/HomePage/carIntroduction/tiggo8.png";
import Image from 'next/image';
import styles from "./CarIntroduction.module.css"

function CarIntroduction() {
  return (
    <div className="min-h-[600px] mt-[50px] w-full flex flex-col mx-auto items-center">

            <div className={`w-[1331px] mb-[100px] flex justify-between items-center mx-auto ${styles.sections}`}>
              <div className="flex flex-col w-[500px]">
                <Image src={lamariText} width={400} height={400} alt="lamari" className="w-[500px] h-[98px]" />
                <p className="text-[17px] text-[#C5C5C5] mt-[30px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ســـتون و سطرآنچنان که لازم است، و بـــرای شرایط فــــعلی تـــکنولوژی مورد نیاز، و کـــاربردهای متنوع با هـــدف بهبود ابـــزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و مــتخصصان را می طلبد، تا بـا نرم افزارها شناخت بیشتری را برای طراحان</p>
              </div>
              <Image src={lamari} width={400} height={400} alt="lamari" className="w-[530px] " />
            </div>

            <div className="bg-[#222222] min-h-[500px] w-full">
                <div className={`w-[1331px] flex justify-between items-center mx-auto mb-[100px] mt-[100px] ${styles.sectionsT}`}>
                  <Image src={xtrim} width={400} height={400} alt="xtrim" className="w-[616px]" />
                  <div className="w-[500px] flex flex-col">
                    <Image src={xtrimText} width={400} height={400} alt="xtrimText" className="w-[500px] h-[98px]" />
                    <p className="text-[17px] text-[#C5C5C5] mt-[30px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ســـتون و سطرآنچنان که لازم است، و بـــرای شرایط فــــعلی تـــکنولوژی مورد نیاز، و کـــاربردهای متنوع با هـــدف بهبود ابـــزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و مــتخصصان را می طلبد، تا بـا نرم افزارها شناخت بیشتری را برای طراحان</p>
                  </div>
                </div>
            </div>

            <div className={`w-[1331px] mb-[100px] flex justify-between items-center mx-auto ${styles.sectionsR}`}>
              <div className="flex flex-col w-[500px]">
                <Image src={tiggo8} width={400} height={400} alt="lamari" className="w-[500px] h-[98px]" />
                <p className="text-[17px] text-[#C5C5C5] mt-[30px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ســـتون و سطرآنچنان که لازم است، و بـــرای شرایط فــــعلی تـــکنولوژی مورد نیاز، و کـــاربردهای متنوع با هـــدف بهبود ابـــزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و مــتخصصان را می طلبد، تا بـا نرم افزارها شناخت بیشتری را برای طراحان</p>
              </div>
              <Image src={tiggo} width={400} height={400} alt="lamari" className="w-[530px] " />
            </div>

    </div>
  )
}

export default CarIntroduction; 