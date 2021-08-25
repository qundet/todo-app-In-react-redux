import { TASK } from "../actions";

const initialState = {
  tasks: [
    {
      id: 0,
      title: "My Github:",
      text: "https://github.com/KUNDET-cloud",
      isCompleted: false,
      time: "Добавлено в 15:12",
    },
  ],
};

export default (state = initialState, { type, title, text, id }) => {
  switch (type) {
    case TASK.ADD: {
      const newTask = {
        id: Date.now(),
        title: title,
        text: text,
        isCompleted: false,
        time: "Добавлено в " + Date.now(),
      };
      return {
        ...state,
        tasks: [newTask, ...state.tasks],
      };
    }

    case TASK.DELETE: {
      const tasks = state.tasks.filter((i) => i.id !== id);
      return { ...state, tasks: tasks };
    }
    case TASK.EDIT: {
      console.log("edit task");
      return { ...state };
    }
    case TASK.MARK: {
      return {
        ...state,
        tasks: state.tasks.map((i) =>
          i.id == id ? { ...i, isCompleted: !i.isCompleted } : i
        ),
      };
    }
    default:
      return state;
  }
};
