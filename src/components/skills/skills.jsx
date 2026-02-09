import React from "react";
import "./skills.css";

import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import java from "../../assets/java.png";
import bootstrap from "../../assets/bootstrap.png";
import mysql from "../../assets/mysql.png";

const skillsData = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JavaScript", img: js },
  { name: "React", img: react },
  { name: "Java", img: java },
  { name: "Bootstrap", img: bootstrap },
  { name: "MySQL", img: mysql },
];

const Skills = () => {
  return (
    <div className="skills">
      <h2>My Skills</h2>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
