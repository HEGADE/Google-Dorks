import {useContext} from "react"
import { storeStore} from "../state/Store";
export const useCleaner = () => {
  const {
    setSearch,
    setExclude,
    setSites,
  } = useContext(storeStore);
  
  
  return {setSearch,setExclude,setSites};
};
