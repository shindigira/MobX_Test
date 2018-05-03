import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "mobx-react";
import store1 from "./stores/store1";
import store2 from "./stores/store2";

ReactDOM.render(
  <Provider store1={store1} store2={store2}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
