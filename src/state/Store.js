import React ,{createContext,useState} from "react"
import {google} from "../helper/google"
export const storeStore=createContext()
export const Store=({children})=>{
    const [showHelpOrNot, setshowHelpOrNot] = useState(true);
    const [search, setSearch] = useState("");
    const [exclude, setExclude] = useState([]);
    const [sites, setSites] = useState("");
 

    return(
       <storeStore.Provider value={{google,search,setSearch,exclude,setExclude,sites,setSites,showHelpOrNot,setshowHelpOrNot}}>

{children}

       </storeStore.Provider>
    )
}
