import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Game } from "./components/Game";
// ========================================

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Game />);
