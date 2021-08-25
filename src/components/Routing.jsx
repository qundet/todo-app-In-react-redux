import React from "react";
import { Switch, Route } from "react-router";

import AllTasks from "./tasks/AllTasks";
import Settings from "./pages/Settings";
import Completed from "./tasks/CompletedTasks";
import Uncompleted from "./tasks/UncompletedTasks";
import About from "./pages/About";
export default function Roting() {
  return (
    <Switch>
      <Route exact path="/" component={AllTasks} />
      <Route path="/completed" component={Completed} />
      <Route path="/uncompleted" component={Uncompleted} />
      <Route path="/settings" component={Settings} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
