import { createContext,useState } from "react";

export const PreviewContext=createContext({
    preproduct:{}
})

export const PreviewProvider=({children})=>{
    const [preproduct,setpreproduct]=useState({});
    const value={preproduct,setpreproduct};

    return <PreviewContext.Provider value={value}>{children}</PreviewContext.Provider>
}