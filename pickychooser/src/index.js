import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Data from "./services/Data";
import Filters from "./components/Filters";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Filters />
    <Data />
  </React.StrictMode>
);
