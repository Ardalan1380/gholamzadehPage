"use client"
import React, { useState } from 'react';
import location from "@/public/locationT.png";
import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import styles from "./Address.module.css"
function Address() {
    const showInMapClicked = (lat , lang) => {
        console.log(lat)
        console.log(lang)
        //37.545194, 45.107472
        window.open("https://maps.google.com?q="+lat+","+lang );
      };
    const [index, setIndex] = useState(null); // null as initial state to avoid unwanted open items

    const data = [
        { id: 1, title: "نمایندگی اکستریم", address: "به زودی دایر خواهد شد. برای اطلاعات بیشتر به نمایندگی مرکزی مراجعه فرمایید" , location:[37.545187 , 45.107446] },

        { id: 2, title: "نمایندگی فونیکس", address: "ارومیه - خیابان دانشکده - جنب بیمارستان شمس" , location: [37.531677, 45.051069]},

        { id: 3, title: "نمایندگی ام وی ام", address: "ارومیه - بلوار شیخ شلتوت - روبه رو میدان میوه و تربار" , location: [37.545194, 45.107472] },

        { id: 4, title: "نمایندگی کرمان موتور", address: "ارومیه - بلوار شیخ شلتوت - روبه روی نمایندگی بهمن موتور" , location: [37.548741 ,45.093807] },

        { id: 5, title: "نمایندگی میتسوبیشی", address: "به زودی دایر خواهد شد. جهت اطلاعات بیشتر به نمایندگی مرکزی مراجعه فرمایید" , location: [37.545187 , 45.107446]  },

        { id: 6, title: "نمایندگی لاماری", address: "ارومیه - بلوار امام علی مجتمع پالم سنتر" , location:[37.529861, 45.058928]},
    ];

    const handleSetIndex = (id) => {
        setIndex(index === id ? null : id);
    };

  return (
    <div className={`w-[1500px] mt-[5rem] min-h-[297px] my-[3rem] flex justify-center flex-col border-2 mx-auto bg-[#404040] border-[#707070] rounded-[23px] p-5 ${styles.container}`}>
    <div className="flex mx-auto mt-2">
        <Image src={location} width={400} height={400} alt="phone" className="w-[20px] ml-2 " />
        <p className="text-center text-white">آدرس نمایندگی ها</p>
    </div>

    <div className={`grid grid-cols-2 mx-auto mt-5 w-full p-5 ${styles.main}`}>
        {data.map(item => (
            <div key={item.id} className="w-full">
                {/* Accordion Header */}
                <div
                    className="flex flex-col w-[90%] h-[47px] mx-auto my-3 rounded-xl items-center justify-center border border-[#707070] bg-[#393939] cursor-pointer"
                    onClick={() => handleSetIndex(item.id)}
                >
                    <div className="flex justify-center items-center w-full px-2">
                        <div>
                            {index !== item.id ? (
                                <FaAngleDown className="text-[#C38065]" />
                            ) : (
                                <FaChevronLeft className="text-[#C38065]" />
                            )}
                        </div>
                        <div className="text-[#C8C8C8] mr-1">
                            {item.title}
                        </div>
                    </div>
                </div>

                {/* Accordion Content */}
                {index === item.id && (

                    <div className="flex  mx-auto justify-center w-full">
                        <div className="w-[90%] border flex flex-col mx-auto border-[#707070] bg-[#282828] text-[#C8C8C8] p-4 mt-2 rounded-xl">
                            {item.address}
                            <div className="flex justify-center mx-auto my-2">
                        <button className="p-1 rounded-lg text-[16px] font-semibold text-[#C8C8C8] bg-[#C38065]" onClick={() => showInMapClicked(item.location[0] , item.location[1])}>
                        بازدید بر روی نقشه
                    </button>

                            </div>
                        </div>
                    </div>

                    
                )}
            </div>
        ))}
    </div>
</div>
  )
}

export default Address