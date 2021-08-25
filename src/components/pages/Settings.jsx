import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/actions";

import switchThemeIcon from "../../assets/icons/013-theme.svg";

export default function Settings() {
  const dispatch = useDispatch();

  const currentTheme = useSelector((state) => state.settings.theme);
  const needSetTheme = currentTheme == "light" ? "dark" : "light";

  const switchTheme = () => {
    dispatch(toggleTheme(needSetTheme));
  };

  return (
    <div className="settings-wrapper">
      <div onClick={switchTheme} className="settings-wrapper__toggle">
        <span>Set {needSetTheme} theme</span>
        <img src={switchThemeIcon} alt="theme" />
      </div>
    </div>
  );
}
