import "./assets/Styles/index.css";
import "./assets/Styles/memory.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Memory from "./games/Memory/Memory";
import Mine from "./games/Mine/Mine";
// import Leader from "./games/LeaderBoard/leaderboard";
import { Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Homepage from "./pages/HomePage/Homepage";


const routes = (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact component={Homepage} />
        <Route path={`/memory`} component={() => App(Memory, "memory")} />
        <Route path={`/mine`} component={() => App(Mine, "mine")} />
      </Switch>
    </BrowserRouter>
  </div>
);


ReactDOM.render(routes, document.getElementById("root"));

// <BrowserRouter>
//   <Switch>
//   <Route path={`/`} exact component={()=>App(Memory,'memory')}/>
//   <Route path={'/navbar'}  component={()=>App(Navbar, 'navbar')}/>
//   <Route path={`/memory`} component={()=>App(Memory,'memory')}/>
//   <Route path={`/mine`} component={()=>App(Mine,'mine')}  />
//   <Route path={`/leaderboard`} component={()=>App(Leader,'leaderboard')}/>
// </Switch>
// </BrowserRouter>
