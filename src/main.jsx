import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//Disable Strict mode so that useEffect does not run twice in dev mode
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
