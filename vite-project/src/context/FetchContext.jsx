import { createContext,useContext,useState } from "react";
const FetchContext=createContext();

export const FetchProvider=({children})=>{
    const [param,setParam]=useState("Hotels")
    return <FetchContext.Provider value={{param,setParam}}>
        {children}
    </FetchContext.Provider>
};
export const useFetch=()=>{
return useContext(FetchContext)
};