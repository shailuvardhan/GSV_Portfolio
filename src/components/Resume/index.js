import { AiOutlineDownload } from "react-icons/ai";

import Header from "../Header";
import Footer from "../Footer";
import "./index.css";

const Resume = () => {
  const url = "http://localhost:3000/Shailu_vardhan_resume.pdf";

  return (
    <>
      <Header />
      <div className="pdf-container">
        <div className="download-button-container">
          <button className="download-btn">
            <a href={url} download="GSV_Resume.pdf" className="btn">
              <AiOutlineDownload /> &nbsp;Download Resume
            </a>
          </button>
        </div>
        <div className="img-container">
          <img
            src="https://res.cloudinary.com/dpt1h4mci/image/upload/v1727089238/Merged_document_ckzij6.jpg"
            alt="resume-img"
            className="resume-img"
          />
        </div>
        <div className="download-button-container">
          <button className="download-btn">
            <a href={url} download="GSV_Resume.pdf" className="btn">
              <AiOutlineDownload /> &nbsp;Download Resume
            </a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
