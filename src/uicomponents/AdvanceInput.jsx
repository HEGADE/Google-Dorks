import React, { useContext } from "react";
import AdvanceOptions from "../AdvanceOptions/Options";
import { Phone, Insta } from "../AdvanceOptions/AdvanceOptUiComponents/Phone";
import Button from "../uicomponents/Button";
import { storeStore } from "../state/Store";

export const AdvanceInput = () => {
  const { phoneOrInsta } = useContext(storeStore);
  let sty={
    "height":phoneOrInsta ? "max-content":"max-content"
  }
  return (
    <>
      <div className="advance_input">
        <AdvanceOptions />
      </div>

      <div className="advance_input_container" style={sty}  >
        {phoneOrInsta ? <Phone setHeight="max-content"/> : <Insta setHeight="420px" /> }
        <Button type={phoneOrInsta ?"Find":"Search"} />
      </div>
    </>
  );
};
