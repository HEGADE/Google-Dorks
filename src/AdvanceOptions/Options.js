import React from "react";
import AdOptions from "./AdvanceOptUiComponents/Options";


function Options() {

  return (
    <>
      <div className="options_container">
        <AdOptions text="Phone"  color="blue"/>
        <AdOptions text="Insta" />
        <AdOptions text="Pdf" />
      
      </div>
    </>
  );
}

export default Options;
