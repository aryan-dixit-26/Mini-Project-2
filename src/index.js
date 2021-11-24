import "./assets/Styles/index.css";
import "./assets/Styles/memory.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import Memory from "./games/Memory/Memory";
import Mine from "./games/Mine/Mine";
import Leader from "./games/LeaderBoard/leaderboard";
import { Switch, Route, Link } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
    <Route path={`/`} exact component={()=>App(Memory,'memory')}/>
    <Route path={`/memory`} component={()=>App(Memory,'memory')}/>
    <Route path={`/mine`} component={()=>App(Mine,'mine')}  />
    <Route path={`/leaderboard`} component={()=>App(Leader,'leaderboard')}/>
  </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
