import React from "react";
import "./education.css";

// Import your logos
import bpimtLogo from "../../assets/bppimt.jpg";
import mdsLogo from "../../assets/mds.jpeg";

const Education = () => {
  return (
    <div className="education">
      <h2>Education</h2>

      <div className="education-box">

        <div className="edu-card">
          <img src={bpimtLogo} alt="BP Poddar Institute Logo" className="edu-logo" />
          <h3>B.Tech in Computer Science Engineering</h3>
          <p>BP Poddar Institute of Management and Technology</p>
          <span>2023 – 2027</span>
        </div>

        <div className="edu-card">
          <img src={mdsLogo} alt="Maria’s Day School Logo" className="edu-logo" />
          <h3>ISC (12th)</h3>
          <p>Maria’s Day School</p>
          <span>2022</span>
        </div>

        <div className="edu-card">
          <img src={mdsLogo} alt="Maria’s Day School Logo" className="edu-logo" />
          <h3>ICSE (10th)</h3>
          <p>Maria’s Day School</p>
          <span>2020</span>
        </div>

      </div>
    </div>
  );
};

export default Education;
