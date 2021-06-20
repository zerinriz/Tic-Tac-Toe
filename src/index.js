import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import Game from "./components/Game";
import Endgame from "./components/Endgame";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/endgame" component={Endgame} />
      <Route path="/game" component={Game} />
      <Route path="/" component={Login} exact={true} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
