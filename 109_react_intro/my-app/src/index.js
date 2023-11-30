import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello";

const root = ReactDOM.createRoot(document.getElementById("root"));
const pNames = ["Jonathan Wick", "Tomaasdf ", "Harry"];

root.render(
  <div>
    {pNames.map((personName) => {
      return <Hello name={personName} />;
    })}
  </div>
);
