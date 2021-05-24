import React, { createContext, useState } from "react";
import { google } from "../helper/google";
import { numberFinder } from "../helper/numberFinder";
export const storeStore = createContext();
export const Store = ({ children }) => {
  const [showHelpOrNot, setshowHelpOrNot] = useState(true);
  const [search, setSearch] = useState("");
  const [exclude, setExclude] = useState([]);
  const [sites, setSites] = useState("");
  const [phoneOrInsta, setphoneOrInsta] = useState(true);
  const [color,setColor]=useState("blue")

  return (
    <storeStore.Provider
      value={{
        google,
        numberFinder,
        color,
        setColor,
        phoneOrInsta, 
        setphoneOrInsta,
        search,
        setSearch,
        exclude,
        setExclude,
        sites,
        setSites,
        showHelpOrNot,
        setshowHelpOrNot,
      }}
    >
      {children}
    </storeStore.Provider>
  );
};
