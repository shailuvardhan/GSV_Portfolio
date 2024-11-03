import { AiOutlineDownload } from "react-icons/ai";

import Header from "../Header";
import Footer from "../Footer";
import ResumeJPG from "../../Assets/ResumeFiles/ResumeJPG.jpg";
import ResumePDF from "../../Assets/ResumeFiles/Shailu_vardhan_Resume_final.pdf";
import "./index.css";

const Resume = () => (
  <>
    <Header />
    <div className="pdf-container">
      <div className="download-button-container">
        <button className="download-btn">
          <a href={ResumePDF} download="GSV_Resume.pdf" className="btn">
            <AiOutlineDownload /> &nbsp;Download Resume
          </a>
        </button>
      </div>
      <div className="img-container">
        <img src={ResumeJPG} alt="resume-img" className="resume-img" />
      </div>
      <div className="download-button-container">
        <button className="download-btn">
          <a href={ResumePDF} download="GSV_Resume.pdf" className="btn">
            <AiOutlineDownload /> &nbsp;Download Resume
          </a>
        </button>
      </div>
    </div>
    <Footer />
  </>
);

export default Resume;
