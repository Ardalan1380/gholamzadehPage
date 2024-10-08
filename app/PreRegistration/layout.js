import localFont from "next/font/local";
import "./globalP.css";
// import styles from "./contact.module.css"
import { Toaster } from 'react-hot-toast';

import { text  , englishText } from "@/utils/custome_fonts";


export default function RegistrationLayout ({children}) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${text.variable} ${englishText.variable}  `}>
        {children}
        <Toaster />
      </body>   
        </html>
    )
}