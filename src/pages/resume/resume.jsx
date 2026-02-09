import React from "react";
import "./resume.css";

// Resume image and PDF
import resumeImg from "../../assets/resume.png"; // your resume photo
import resumePDF from "../../assets/Hussain.Resume.pdf";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "MdHussain_Resume.pdf";
    link.click();
  };

  return (
    <div className="resume">
      <h2>My Resume</h2>

      <div className="resume-content">
        <img src={resumeImg} alt="Resume" className="resume-img" />

        <p>
          Hi, I’m Md Hussain, a Full Stack Developer with skills in React, Java,
          Spring Boot, and MySQL. I build modern, responsive web applications
          with clean and scalable code.
        </p>

        <button onClick={handleDownload}>Download Resume</button>
      </div>
    </div>
  );
};

export default Resume;
