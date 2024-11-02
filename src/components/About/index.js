import { ImPointRight } from "react-icons/im";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiPython,
  DiSqllite,
  DiNodejs,
  DiReact,
  DiWindows,
  DiGithubBadge,
  DiNpm,
} from "react-icons/di";

import { VscVscodeInsiders } from "react-icons/vsc";

import Header from "../Header";
import Footer from "../Footer";
import Skills from "./Skills";
import "./index.css";

import aboutImg from "../../Assets/rear-view-programmer-working-all-night-long_1098-18697.avif";

const skillsList = [
  {
    id: 0,
    icon: DiHtml5,
  },
  {
    id: 1,
    icon: DiCss3,
  },
  {
    id: 2,
    icon: DiJavascript,
  },
  { id: 3, icon: DiPython },
  { id: 4, icon: DiSqllite },
  { id: 5, icon: DiNodejs },
  { id: 6, icon: DiReact },
];

const toolsList = [
  {
    id: 0,
    icon: DiWindows,
  },
  {
    id: 1,
    icon: VscVscodeInsiders,
  },
  {
    id: 2,
    icon: DiNpm,
  },
  {
    id: 3,
    icon: DiGithubBadge,
  },
];

const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="top-container">
          <div className="about-text-container">
            <h1 className="about-header">
              Know Who <strong>I'M</strong>
            </h1>
            <p className="about-body-text">
              Hi Everyone, I am <span className="purple">G Shailu vardhan</span>
              from <span className="purple"> Hyderabad, India.</span>
              <br />
              Aspiring MERN Stack Developer | CCBPian at NxtWave Python
              ,SQL,ReactJS.
              <br />
              B.Tech (Bachelor of Technology) in Electrical & Electronics
              Engineering(EEE) I have completed B.Tech (Bachelor of Technology)
              in Electrical & Electronics Engineering(EEE) at Mahatma Gandhi
              Institute of Technology(MGIT.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Reading books
              </li>
              <li className="about-activity">
                <ImPointRight /> Writing Tech Blogs
              </li>
              <li className="about-activity">
                <ImPointRight /> Travelling
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="sign-footer">Shailuvardhan</footer>
          </div>
          <div className="about-img-right-container">
            <img src={aboutImg} alt="about-img" className="about-img" />
          </div>
        </div>
        <div className="bottom-container">
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <ul className="skills-list">
            {skillsList.map((eachItem) => (
              <Skills key={eachItem.id} iconDetails={eachItem} />
            ))}
          </ul>
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <ul className="skills-list">
            {toolsList.map((eachItem) => (
              <Skills key={eachItem.id} iconDetails={eachItem} />
            ))}
          </ul>
        </div>
      </div>
      \
      <Footer />
    </>
  );
};

export default About;
