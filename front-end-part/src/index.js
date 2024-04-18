import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./Redux/store"; // Ensure the path to your store is correct
import { Provider } from "react-redux";
import "antd/dist/antd"; // Ensure the CSS import is correct

// Find the root div element
const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // Create a root

// Use the root.render method for mounting React components
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
