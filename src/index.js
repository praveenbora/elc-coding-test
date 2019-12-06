import React from "react";
import { render } from "react-dom";

import Autocomplete from "./components/Autocomplete";

require("./style.css");

function App() {
  return (
    <div>
      <h1>auto-search feature - React</h1>
      <h2>Start typing name and experience the autocomplete wizardry!</h2>
      <Autocomplete />
    </div>
  );
}

const container = document.createElement("div");
document.body.appendChild(container);
render(<App />, container);
