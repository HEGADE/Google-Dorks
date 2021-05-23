import React, { useState,useContext } from "react";
// import { google } from "../helper/google";
import {storeStore} from "../state/Store"

import Label from "./label/Label";
import Button from "../uicomponents/Button"

export const Input = () => {
  // const [showHelpOrNot, setshowHelpOrNot] = useState(true);
  // const [search, setSearch] = useState("");
  // const [exclude, setExclude] = useState([]);
  // const [sites, setSites] = useState("");
  const {search,setSearch,exclude,setExclude,sites,setSites,showHelpOrNot,setshowHelpOrNot} =useContext(storeStore)

 
  function showHelp(e) {
    if (showHelpOrNot) {
      e.target.focus();
      setshowHelpOrNot(false);
      alert("Use coma(,) if you want to exclude multiple things ");
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Label text="Search Query  *" />
          <input
            type="text"
            placeholder="My Struggle"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Label text="Enter  things to Exclude  *" />

          <input
            type="text"
            placeholder="Hitler"
            value={exclude}
            onClick={showHelp}
            onChange={(e) => setExclude(e.target.value)}
          />
          <Label text="Search in specified site" />

          <input
            type="text"
            placeholder="wikipedia"
            value={sites}
            onChange={(e) => setSites(e.target.value)}
          />
<Button type="Filter"/>
        </div>
      </div>
    </>
  );
};
