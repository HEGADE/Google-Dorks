import React, { useContext } from "react";
import AdvanceOptions from "../AdvanceOptions/Options";
import { Phone, Insta } from "../AdvanceOptions/AdvanceOptUiComponents/Phone";
import Button from "../uicomponents/Button";
import { storeStore } from "../state/Store";

export const AdvanceInput = () => {
  const { phoneOrInsta, setphoneOrInsta } = useContext(storeStore);
  return (
    <>
      <div className="advance_input">
        <AdvanceOptions />
      </div>

      <div className="advance_input_container">
        {phoneOrInsta ? <Phone /> : <Insta />}
        <Button type={phoneOrInsta ?"Find":"Search"} />
      </div>
    </>
  );
};
