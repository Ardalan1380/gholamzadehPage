import localFont from "next/font/local";
// import "./globalls.css";
import styles from "./contact.module.css"

import { text , peyda , englishText } from "@/utils/custome_fonts";


export default function ContactUsLayout ({children}) {
    return (
        <html>
            <body className={`${text.variable} ${englishText.variable} ${styles.body} `}>
        {children}
      </body>   
        </html>
    )
}