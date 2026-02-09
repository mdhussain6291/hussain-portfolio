import React from "react";
import "./projects.css";

// Project images (add them to your assets folder)
import hotelBill from "../../assets/hotel.png";
import todoList from "../../assets/to-do.png";
import megaMart from "../../assets/megamart.png";
import resultCalc from "../../assets/result.png";
import electricityBill from "../../assets/electricity.png";
import tipCalc from "../../assets/tip.png";
import portfolio from "../../assets/portfolio.png";

const projectsData = [
  {
    name: "Hotel Billing App",
    img: hotelBill,
    desc: "A web app to calculate hotel bills easily.",
    link: "https://hotelbill-998fd.web.app/"
  },
  {
    name: "Todo List",
    img: todoList,
    desc: "Manage your tasks efficiently with this Todo app.",
    link: "https://todo-list-3e46c.web.app/"
  },
  {
    name: "Mega Mart",
    img: megaMart,
    desc: "An e-commerce demo site for groceries and daily needs.",
    link: "https://mega-mart-53ed9.web.app/"
  },
  {
    name: "Result Calculator",
    img: resultCalc,
    desc: "Calculate academic results quickly and easily.",
    link: "https://result-calc.web.app/"
  },
  {
    name: "Electricity Bill Calculator",
    img: electricityBill,
    desc: "Compute your electricity bill in seconds.",
    link: "https://electricity-bill-728cc.web.app/"
  },
  {
    name: "Tip Calculator",
    img: tipCalc,
    desc: "Calculate tips and split bills with ease.",
    link: "https://tip-calc-c6ae6.web.app/"
  },
  {
    name: "Portfolio Website",
    img: portfolio,
    desc: "My personal portfolio showcasing my skills and projects.",
    link: "https://portfolio-husssssain.netlify.app/"
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
