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


const peyda = localFont ({
    src : [
        {
            path:"../assets/fonts/PEYDANOEN_REGULAR.ttf",
            weight: "600",
            style: "regular"
        },
        
    ],
    variable: "--regular"
})



export {englishText , peyda , text}