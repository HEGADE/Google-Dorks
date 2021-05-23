import React from "react";
import AdOptions from "./AdvanceOptUiComponents/Options";

function Options() {
  return (
    <>
      <div className="options_container">
        <AdOptions text="Phone" />
        <AdOptions text="Insta" />
        <AdOptions text="All site" />
      </div>
    </>
  );
}

export default Options;
