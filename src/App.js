import React, { useState } from "react";
import { Intro } from "./uicomponents/Intro";
import { Input } from "./uicomponents/Input";
import { AdvanceInput } from "./uicomponents/AdvanceInput";
import { Circle } from "./uicomponents/Circle";
import { Footer } from "./uicomponents/Footer";

function App() {
  const [option, setOption] = useState("for advance options");
  const [display, setDisplay] = useState(false);
  const determine = () => {
    setTimeout(() => {
      setDisplay(!display);
      setOption(() => (!display ? "normal option" : "for advance option"));
    }, 300);
  };
  return (
    <>
      <Intro />
      {!display ? <Input /> : <AdvanceInput />}

      <strong className="additional_options" onClick={determine}>
        {option}
      </strong>

      <Circle />
      <Footer />
    </>
  );
}

export default App;
