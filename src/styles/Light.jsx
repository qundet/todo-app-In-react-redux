import React from "react";

import App from "../App";

import "./lightTheme.scss";

export default function Light({ store }) {
  console.log("light is add");

  return (
    <div className="light">
      <App store={store} />
    </div>
  );
}
