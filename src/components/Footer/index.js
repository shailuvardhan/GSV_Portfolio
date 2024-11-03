import {
  FaRegCopyright,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";
import "./index.css";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer-container">
      <div className="designed-by-container">
        <h3 className="h3">Designed and Developed by G Shailu vardhan</h3>
      </div>
      <div className="copyright-container">
        <h3 className="h3">
          Copyright{" "}
          <span className="copyright-symbol">
            <FaRegCopyright className="footer-social-icons" />
          </span>
          {year} SB
        </h3>
      </div>
      <ul className="social-media-icons">
        <li className="social-icons">
          <a
            href="https://github.com/shailuvardhan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare className="footer-social-icons" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://x.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitterSquare className="footer-social-icons" />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://www.linkedin.com/in/shailu-vardhan-ganta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-social-icons" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
