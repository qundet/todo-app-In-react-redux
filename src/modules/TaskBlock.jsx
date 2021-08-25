import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import deleteIcon from "../assets/icons/006-remove.svg";
import editIcon from "../assets/icons/007-edit.svg";
import expandIcon from "../assets/icons/012-expand.svg";
import completedIcon from "../assets/icons/002-checked.svg";
import { markTask, deleteTask } from "../store/actions";

export default function TaskBlock({ id, title, text, isCompleted, time }) {
  const dispatch = useDispatch();

  const markTaskPress = () => {
    dispatch(markTask(id));
  };

  const deleteTaskPress = () => {
    dispatch(deleteTask(id));
  };

  const [textShow, setTextShow] = useState(false);

  return (
    <div className="task-wrapper">
      <div className="task-wrapper__show">
        <div onClick={markTaskPress} className="task-wrapper__show__mark">
          {isCompleted ? (
            <img src={completedIcon} alt="completed" />
          ) : (
            <span></span>
          )}
        </div>
        <div className="task-wrapper__show__title">
          <span>{title}</span>
        </div>
        <div className="task-wrapper__show__buttons">
          <div className="task-wrapper__show__buttons__edit">
            <img src={editIcon} alt="edit" />
          </div>
          <div
            onClick={deleteTaskPress}
            className="task-wrapper__show__buttons__delete"
          >
            <img src={deleteIcon} alt="delete" />
          </div>
          <div
            onClick={() => setTextShow(!textShow)}
            id="i"
            className={
              textShow
                ? "task-wrapper__show__buttons__expand"
                : "task-wrapper__show__buttons__expand hide"
            }
          >
            <img src={expandIcon} alt="expand" />
          </div>
        </div>
      </div>
      <div
        className={textShow ? "task-wrapper__text" : "task-wrapper__text hide"}
      >
        <span>{text}</span>
      </div>
    </div>
  );
}
