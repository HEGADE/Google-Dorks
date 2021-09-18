import React from "react";

const Label = ({ text: props }) => {
  return (
    <>
      <label className="label">{props}</label>
    </>
  );
};

export default Label;
