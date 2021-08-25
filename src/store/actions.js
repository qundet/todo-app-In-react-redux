export const TASK = {
  ADD: "ADD_TASK",
  DELETE: "DELETE_TASK",
  EDIT: "EDIT_TASK",
  MARK: "MARK_TASK",
};

export const TOGGLE_THEME = "TOGGLE_THEME";

export const addTask = (title, text) => ({
  type: TASK.ADD,
  title,
  text,
});

export const deleteTask = (id) => ({
  type: TASK.DELETE,
  id,
});

export const editTask = (id) => ({
  type: TASK.EDIT,
  id,
});

export const markTask = (id) => ({
  type: TASK.MARK,
  id,
});

export const toggleTheme = (payload) => ({
  type: TOGGLE_THEME,
  payload,
});
