import localFont from "next/font/local";

 const englishText =  localFont({
    src:[
        {
            path:"../assets/fonts/(@CCina_Design)rinature-one.ttf",
            weight: "600",
            style: "normal"
        },
    ],
    variable: "--English"
})


const text = localFont ({
    src : [
        {
            path:"../assets/fonts/Dalal_MRT.ttf",
            weight: "600",
            style: "bold"
        },
        
    ],
    variable: "--text"
})


export {englishText , text}