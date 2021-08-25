import React from "react";
import { Link } from "react-router-dom";

import Button from "../modules/Button";

import allTasksIcon from "../assets/icons/009-alltasks.svg";
import settingsIcon from "../assets/icons/010-settings.svg";
import infoIcon from "../assets/icons/011-info.svg";
import completedTasksIcon from "../assets/icons/001-completed.svg";
import uncompletedTasksIcon from "../assets/icons/014-uncompleted.svg";

export default function Sidebar() {
  return (
    <React.Fragment>
      <Link to={"/"}>
        <Button name="All tasks" icon={allTasksIcon} />
      </Link>
      <Link to="/completed">
        <Button name="Completed" icon={completedTasksIcon} />
      </Link>
      <Link to="/uncompleted">
        <Button name="Uncompleted" icon={uncompletedTasksIcon} />
      </Link>
      <Link to={"/settings"}>
        <Button name="Settings" icon={settingsIcon} />
      </Link>
      <Link to={"/about"}>
        <Button name="info" icon={infoIcon} />
      </Link>
    </React.Fragment>
  );
}
