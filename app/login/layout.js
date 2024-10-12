import localFont from "next/font/local";
import "./globalL.css";
// import styles from "./contact.module.css"

import { text  , englishText } from "@/utils/custome_fonts";
import { ContextComponentsProvider } from "@/context/MyContextProvider";


export default function LoginLayout ({children}) {
    return (
        <html lang="fa" dir="rtl">
            <body className={`${text.variable} ${englishText.variable}  `}>
            <ContextComponentsProvider>
                {children}
            </ContextComponentsProvider>
            </body>   
        </html>
    )
}