"use client"

import React, { useState } from 'react';
import instagram from "@/app/public/instagram.svg";
import Image from 'next/image';
import { FaAngleDown } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Link from 'next/link';

function Instagram() {
    const [index, setIndex] = useState(null); // null as initial state to avoid unwanted open items

    const data = [
        { id: 1, title: "نمایندگی اکستریم", test: "xtrim_gholamzadeh" },
        { id: 2, title: "نمایندگی فونیکس", test: "fownix306" },
        { id: 3, title: "نمایندگی ام وی ام", test: "mvm306_gholamzade" },
        { id: 4, title: "نمایندگی کرمان موتور", test: "kermanmotoe_1107" },
        { id: 5, title: "نمایندگی میتسوبیشی", test: "lamari_gholamzadeh" },
        { id: 6, title: "نمایندگی لاماری", test: "lamari_gholamzadeh" },
    ];

    const handleSetIndex = (id) => {
        // If clicked item is already open, close it by setting index to null
        setIndex(index === id ? null : id);
    };

    return (
        <div className="w-[396px] mt-[7rem] flex flex-col min-h-[297px] border-2 border-[#707070] rounded-xl">
            <div className="flex mx-auto mt-2">
                <Image src={instagram} width={400} height={400} alt="phone" className="w-[20px] ml-1 " />
                <p className="text-center text-white">
                    اینستاگرام 
                </p>
            </div>

            <div className="flex flex-col justify-center items-center p-2 rounded-xl h-auto">
                {data.map(item => (
                    <div key={item.id} className="w-full">
                        {/* Accordion Header */}
                        <div
                            className="flex flex-col w-[341px] h-[34px] mx-auto my-3 rounded-xl items-center justify-center border border-[#707070] bg-[#393939] cursor-pointer"
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
                            <div className="flex justify-center w-full">
                                <div className="w-[341px] mx-auto border border-[#707070] bg-[#282828] text-[#C8C8C8] p-4 mt-2 rounded-xl">
                                    <Link className="text-center" href={`https://instagram.com/${item.test}`}>
                                    <p className="text-center">
                                    {item.test}
                                    </p>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Instagram