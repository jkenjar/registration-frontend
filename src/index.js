import React from "react";
import ReactDOM from "react-dom";
import App from "./views/App";
import { store } from "./redux/configureStore";
import { Provider } from "react-redux";
import "./app.css";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
