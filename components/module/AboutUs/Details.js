import React from 'react'
import styles from "./Details.module.css"

function Details() {
  return (
    <div className={`mt-[120px] w-[1500px] h-[850px] flex justify-center mx-auto ${styles.container}`}>
        <div className={`w-[812px] rounded-[40px] ml-8 h-[670px] bg-white ${styles.whiteSpace}`}>
        </div>
        <div className={`flex flex-col mr-8 w-[600px] ${styles.text}`}>
            <h2 className={`text-[30px] text-white font-semibold `}>لورم ایپسوم متن ساختگی با تولید سادگی</h2>

            <p className={`text-[#F1F1F1] my-20 `}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طـــــــراحان گرافیک است چاپگرها و متون بلکه روزنامه و مــــــجله در ســــــــتون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی</p>
            <button className={`bg-[#C38065] rounded-[30px] w-[200px] h-[65px]`}></button>
        </div>
    </div>
  )
}

export default Details