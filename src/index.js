import React from "react";
import ReactDOM from "react-dom/client";  // Import ReactDOM from 'react-dom/client'
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // Add custom styles if needed

const root = ReactDOM.createRoot(document.getElementById("root"));  // Create a root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
