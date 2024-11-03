import { v4 as uuidv4 } from "uuid";

import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

import Cryptocurrency from "../../Assets/ProjectsImg/Cryptocurrency.png";
import Ecommerce from "../../Assets/ProjectsImg/Ecommerce.png";
import JobSearchApp from "../../Assets/ProjectsImg/JobSearchApp.jpg";
import IPLDashboard from "../../Assets/ProjectsImg/IPLDashboard.png";
import Wikipedia from "../../Assets/ProjectsImg/Wikipedia.png";

const ProjectList = [
  {
    id: uuidv4(),
    projectImg: Cryptocurrency,
    name: "Crypto Currency App",
    description:
      "Developed a comprehensive CryptoCurrency App that enables users to track and manage their cryptocurrency investments effectively. The application features real-time price tracking, portfolio management, and market analysis tools, providing users with a seamless experience in navigating the cryptocurrency landscape.Leveraged modern web technologies including React for the frontend,ensuring a responsive and efficient application.",
    gitHubLink: "https://github.com/shailuvardhan/CryptoCurrencyApp",
    projectDemoLink: "https://gsvcryptotrker.ccbp.tech/",
  },
  {
    id: uuidv4(),
    projectImg: Ecommerce,
    name: "Nxt Trendz(ECommerce Clone)",
    description:
      "Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart.Built pages for Login, Products, and Product details with React Router, React components, form inputs,and event handlers.Enabled secure authentication and authorization with JWT tokens and REST API calls.",
    gitHubLink: "https://github.com/shailuvardhan/Ecommerce-Application",
    projectDemoLink: "https://gantaecommerce.ccbp.tech/",
  },
  {
    id: uuidv4(),
    projectImg: JobSearchApp,
    name: "Jobby App",
    description:
      "Brought to life an all-encompassing job search platform, Jobby App.Created pages for Login, Home, Jobs, and Job item details with React components, form inputs, andevent handlers.Secured user information with JWT tokens, REST API calls, and local storage.Utilized React Router for protected routes and persisted login state.",
    gitHubLink: "https://github.com/shailuvardhan/JobbyApp",
    projectDemoLink: "https://gsvjobbyapp.ccbp.tech/",
  },
  {
    id: uuidv4(),
    projectImg: IPLDashboard,
    name: "IPL Dashboard",
    description:
      "Built an interactive hub for IPL teams and matches information.Navigated seamlessly with React Router, presenting team details and matches with REST API calls.Included a custom 404 page for non-existent routes.",
    gitHubLink: "https://github.com/shailuvardhan/IPLDashboard",
    projectDemoLink: "https://gantaipldash.ccbp.tech/",
  },
  {
    id: uuidv4(),
    projectImg: Wikipedia,
    name: "Wikipedia Search Application",
    description:
      "Developed custom wikipedia search application where user can search and view curated results and can see detailed explanation in wikipedia by clicking on the specific result",
    gitHubLink: "",
    projectDemoLink: "https://gantawikisearch.ccbp.tech/",
  },
];
console.log(ProjectList);

const Projects = () => {
  return (
    <>
      <Header />
      <div className="projects-container">
        <div className="text-container">
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p className="sub-heading">
            Here are a few projects I've worked on recently.
          </p>
        </div>
        <ul className="projects-list-container">
          {ProjectList.map((project) => (
            <li className="project-item" id={project.id}>
              <div className="img-container">
                <img
                  src={project.projectImg}
                  className="project-card-img"
                  alt="project-img"
                />
              </div>
              <h1 className="project-name">{project.name}</h1>
              <p className="project-description">{project.description}</p>
              <div className="buttons-container">
                <button className="btn-link">
                  <a
                    href={project.gitHubLink}
                    rel="noreferrer"
                    className="a-link"
                    target="_blank"
                  >
                    {" "}
                    <BsGithub />
                    GitHub
                  </a>
                </button>
                <button className="btn-link">
                  <a
                    href={project.projectDemoLink}
                    rel="noreferrer"
                    className="a-link"
                    target="_blank"
                  >
                    <CgWebsite />
                    Live Demo
                  </a>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
