import { MdWavingHand } from "react-icons/md";
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Type from "./Type";
import myImg from "../../Assets/personLogo.jpg";
import "./index.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-container">
        <div className="text-container">
          <h1>
            Hi There!{" "}
            <span className="wave">
              <MdWavingHand />
            </span>
          </h1>

          <h1 className="heading-name">
            I'M <strong className="main-name">G Shailu vardhan</strong>
          </h1>
          <Type />
        </div>
        <div className="programmer-img-container">
          <img
            src="https://res-console.cloudinary.com/dpt1h4mci/thumbnails/v1/image/upload/v1727514905/Y29kaW5nLXJvdW5kLWNvbXBvc2l0aW9uXzEyODQtNDA3NTJfczF2bDdp/drilldown"
            alt="programmer-logo"
            className="programmer-img"
          />
        </div>
      </div>
      <div className="bottom-container">
        <div className="left">
          <h1>
            LET ME <span className="purple">INTRODUCE</span> MYSELF
          </h1>
          <p className="home-body">
            I am in classics like
            <i>
              <b className="purple">HTML,CSS,Javascript.</b>
            </i>
            <br />
            <br />
            My field of Interest's are building new &nbsp;
            <i>
              <b className="purple">Web Technologies and Products</b>
            </i>
            Whenever possible, I also apply my passion for developing products
            with <b className="purple">Node.js</b> and
            <i>
              <b className="purple">
                {" "}
                Modern Javascript Library and Frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="purple"> React.js and Next.js</b>
            </i>
          </p>
        </div>
        <div className="person-logo-img">
          <img src={myImg} alt="person-avatar" className="avatar-img" />
        </div>
      </div>
      <div className="contact-me-container">
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className="purple">connect </span>with me
        </p>
        <ul className="home-social-media-icons">
          <li className="home-social-icons">
            <a
              href="https://github.com/shailuvardhan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare />
            </a>
          </li>
          <li className="home-social-icons">
            <a
              href="https://x.com/i/flow/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitterSquare />
            </a>
          </li>
          <li className="home-social-icons">
            <a
              href="https://www.linkedin.com/in/shailu-vardhan-ganta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
