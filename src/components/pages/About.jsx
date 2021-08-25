import React from "react";

import githubIcon from "../../assets/icons/github.png";
import codewarsIcon from "../../assets/icons/codewars.png";

export default function About() {
  return (
    <div className="about-wrapper">
      <h1>Contacts</h1>
      <div className="about-wrapper__contacts">
        <a
          href="https://github.com/KUNDET-cloud"
          className="about-wrapper__contacts__github"
        >
          <img src={githubIcon} alt="github" />
          <span>Github</span>
        </a>
        <a
          href="https://www.codewars.com/users/KUNDET"
          className="about-wrapper__contacts__codewars"
        >
          <img src={codewarsIcon} alt="codewars" />
          <span>Codewars</span>
        </a>
      </div>
    </div>
  );
}
