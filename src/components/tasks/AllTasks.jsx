import React from "react";
import { useSelector } from "react-redux";

import TaskBlock from "../../modules/TaskBlock";
import AddTaskBlock from "../AddTask";

export default function AllTasks() {
  const tasks = useSelector((state) => state.tasks.tasks);
  return (
    <>
      <AddTaskBlock />
      <h1>All tasks</h1>
      <div className="tasks-wrapper">
        {tasks.map((i) => (
          <TaskBlock
            key={i.id}
            id={i.id}
            title={i.title}
            text={i.text}
            isCompleted={i.isCompleted}
            time={i.time}
          />
        ))}
      </div>
    </>
  );
}
