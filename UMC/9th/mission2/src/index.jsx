import React from "react";
import { createRoot } from "react-dom/clinet";
import "./index.css";
import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

const containder = document.getElementById("root");
const root = createRoot(containder);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
