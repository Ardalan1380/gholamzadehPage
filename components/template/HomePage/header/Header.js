import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from "./Header.module.css"
import Image from 'next/image';


//img
import tiggo from "@/public/HomePage/tiggo.png"

function Header() {
   return (
    <div className={`w-full min-h-[600px] flex justify-center items-center mx-auto ${styles.Container}`}>
        <Image src={tiggo} width={400} height={400} alt={tiggo} className={`w-[843px] h-[415px] ${styles.images}`} />
    </div>
   )
}

export default Header