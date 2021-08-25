import React from "react";

import App from "../App";

import "./darkTheme.scss";

export default function Dark({ store }) {
  console.log("dark is add");
  return (
    <div className="dark">
      <App store={store} />;
    </div>
  );
}
