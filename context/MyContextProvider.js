'use client'

import { createContext, useContext, useState } from "react";

export const CardContext = createContext();

export const ContextComponentsProvider = ({children}) => {
    const [myRoute , setMyRoute] = useState()

    return(
        <CardContext.Provider value={{myRoute , setMyRoute}}>
            {children}
        </CardContext.Provider>
    )
}


export function useCardContext () {
    return useContext(CardContext);
}