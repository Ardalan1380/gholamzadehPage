import localFont from "next/font/local";
import "./globalV.css";
// import styles from "./contact.module.css"

import { text  , englishText } from "@/utils/custome_fonts";


export default function VerifyLayout ({children}) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${text.variable} ${englishText.variable}  `}>
        {children}
      </body>   
        </html>
    )
}