import React from "react";
import AdvanceOptions from "../AdvanceOptions/Options";
import { Phone } from "../AdvanceOptions/AdvanceOptUiComponents/Phone";

export const AdvanceInput = () => {
  return (
    <>
      <div className="advance_input">
        <AdvanceOptions />
      </div>
      <div className="advance_wrapper">

      <div className="advance_input_container">
        <Phone />
      </div>
      </div>
    </>
  );
};
