import React,{useContext} from "react";
import AdOptions from "./AdvanceOptUiComponents/Options";
import {storeStore} from "../state/Store"


function Options() {
  const {color} =useContext(storeStore)

  return (
    <>
      <div className="options_container">
        <AdOptions text="Phone"  color="blue"/>
        <AdOptions text="Insta" />
      
      </div>
    </>
  );
}

export default Options;
