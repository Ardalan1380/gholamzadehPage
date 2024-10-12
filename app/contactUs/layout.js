import localFont from "next/font/local";
import "./globalM.css";
// import styles from "./contact.module.css"
import { Toaster } from 'react-hot-toast';

import { text  , englishText } from "@/utils/custome_fonts";
import { ContextComponentsProvider } from "@/context/MyContextProvider";


export default function ContactUsLayout ({children}) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${text.variable} ${englishText.variable}  `}>
            <ContextComponentsProvider>
                {children}
            <Toaster position="top-left"/>
                </ContextComponentsProvider>
        
      </body>   
        </html>
    )
}