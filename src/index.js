import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import FastClick from "fastclick";
import routes from "./router";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import store from "@/store";
import * as serviceWorker from "./serviceWorker";
import "./config/rem";
import "./style/base.scss";
console.log("routes", routes);

FastClick.attach(document.body);

ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </AppContainer>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
