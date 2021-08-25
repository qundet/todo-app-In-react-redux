import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { addTask } from "../store/actions";

import addIcon from "../assets/icons/005-plus.svg";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const newTask = () => {
    dispatch(addTask(title, text));
    setTitle("");
    setText("");
    document.querySelector("input").value = "";
    document.querySelector("textarea").value = "";
    showTaskBlock();
  };

  const showTaskBlock = () => {
    const main = document.getElementById("m").classList;
    main[1] === "hide" ? main.remove("hide") : main.add("hide");
  };

  return (
    <div className="add-task-wrapper">
      <div id="m" className="add-task-wrapper__body hide">
        <div className="add-task-wrapper__body__input">
          <span>Title</span>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
            type="text"
            maxLength="55"
          />
          <span>Your text</span>
          <textarea
            onChange={(e) => {
              setText(e.target.value);
            }}
            type="text"
            placeholder="Your task..."
            maxLength="200"
          />
        </div>
        <div className="add-task-wrapper__body__buttons">
          <div
            onClick={newTask}
            className="add-task-wrapper__body__buttons__save"
          >
            <span>Save</span>
          </div>
          <div
            onClick={showTaskBlock}
            className="add-task-wrapper__body__buttons__cancel"
          >
            <span>Cancel</span>
          </div>
        </div>
      </div>
      <div onClick={showTaskBlock} className="add-task-button">
        <h1>New task</h1>
        <img src={addIcon} alt="add" />
      </div>
    </div>
  );
}
