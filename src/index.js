import React from "react";
import ReactDOM from "react-dom/client";
import { FilterableProductTable } from "./components/FilterableProductTable";
import "./index.css";
// import { Game } from "./components/Game";
// ========================================

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(<FilterableProductTable />);
