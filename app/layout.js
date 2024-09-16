
import "./globals.css";
import localFont from "next/font/local";

import { text , englishText } from "@/utils/custome_fonts";



// const geistMono = localFont({
//   src: "./fonts/Dalal_MRT.ttf",
//   // variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${text.variable} ${englishText.variable}`}>
        {children}
      </body>
    </html>
  );
}
