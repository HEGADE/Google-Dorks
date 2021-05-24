import {useContext} from "react"
import { storeStore} from "../state/Store";
export const useCleaner = () => {
  const {
    search,
    setSearch,
    exclude,
    setExclude,
    sites,
    setSites,
    showHelpOrNot,
    setshowHelpOrNot,
  } = useContext(storeStore);
  
  
  return {setSearch,setExclude,setSites};
};
