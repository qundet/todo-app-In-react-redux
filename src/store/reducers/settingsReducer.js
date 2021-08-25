import { TOGGLE_THEME } from "../actions";

export default (state = { theme: "light" }, { type, payload }) => {
  switch (type) {
    case TOGGLE_THEME: {
      return { theme: payload };
    }
    default:
      return state;
  }
};
