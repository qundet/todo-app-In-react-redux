import React from "react";

export default function Button({ name, icon }) {
  return (
    <div className="button">
      <img src={icon} alt="img" />
      <span>{name}</span>
    </div>
  );
}
