import React, { useState} from "react";
import { Intro } from "./uicomponents/Intro";
import { Input } from "./uicomponents/Input";
import { AdvanceInput } from "./uicomponents/AdvanceInput";
import { Circle } from "./uicomponents/Circle";
import { Footer } from "./uicomponents/Footer";
import { useCleaner } from "./helper/useCleaner";
import { Nav } from "./uicomponents/Nav";import MasterMode from "./masterMode/Master"
import {Loading} from "./utils/Loading"

function App() {
  const [option, setOption] = useState("for advance options");
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(true);
  const { setSearch: clearSearch, setExclude, setSites } = useCleaner();
  window.onload = () => {
    setLoading(false);
  };
  const STYLE = {
    height: "100vh",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const determine = () => {
    setTimeout(() => {
      setDisplay(!display);
      setOption(() => (!display ? "normal option" : "for advance option"));
      clearSearch("");
      setExclude("");
      setSites("");
    }, 300);
  };

  if (loading) {
    return <Loading/>;
  }
  return (
    <>
    <Nav/>
      <Intro />
    <MasterMode/>

      {/* {!display ? <Input /> : <AdvanceInput />}

      <strong className="additional_options" onClick={determine}>
        {option}
      </strong>

      <Circle /> */}
      {!display && <Footer />}
    </>
  );
}

export default App;
