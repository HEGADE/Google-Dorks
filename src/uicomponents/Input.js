import React, { useContext } from "react";

import { storeStore } from "../state/Store";

import Label from "./label/Label";
import Button from "../uicomponents/Button";

export const Input = () => {
  const {
    search,
    setSearch,
    exclude,
    setExclude,
    sites,
    setSites,
    fileType,
    setFileType,
    showHelpOrNot,
    setshowHelpOrNot,
  } = useContext(storeStore);

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
          <Label text="Enter  things to Exclude " />

          <input
            type="text"
            placeholder="Ex: JQuery"
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

          <Label text="Search for specified file type" />

          <input
            type="text"
            placeholder="Ex: pdf"
            value={fileType}
            onChange={(e) => setFileType(e.target.value)}
          />
          <Button type="Filter" />
        </div>
      </div>
    </>
  );
};
