import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter.routers";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<AppRouter />, rootElement);
