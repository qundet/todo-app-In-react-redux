import React from "react";
import Routing from "./components/Routing";
import Sidebar from "./components/Sidebar";

import { useSelector } from "react-redux";

import "./styles/main.scss";
import "./styles/lightTheme.scss";
import "./styles/darkTheme.scss";

function App() {
  const currentTheme = useSelector((state) => state.settings.theme);
  return (
    <div className={currentTheme}>
      <div className="app-wrapper">
        <div className="app-wrapper__sidebar">
          <h1>Menu</h1>
          <div className="app-wrapper__sidebar__links-block__">
            <Sidebar />
          </div>
        </div>
        <div className="app-wrapper__main">
          <Routing />
        </div>
      </div>
    </div>
  );
}

export default App;
