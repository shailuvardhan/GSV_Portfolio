import "./index.css";

const Resume = () => {
  const url = "http://localhost:3000/Shailu_vardhan_resume.pdf";

  // const onClickButton = (url) => {
  //   const filename = url.split("/").pop();
  //   const aTag = document.createElement("a");
  //   aTag.href = url;
  //   aTag.setAttribute("download", filename);
  //   document.body.appendChild(aTag);
  //   aTag.click();
  //   aTag.remove();
  // };

  return (
    <div className="pdf-container">
      <div className="download-button-container">
        {/* <button
          onClick={() => {
            onClickButton(url);
          }}
        >
          Download Resume
        </button> */}
        <button className="download-btn">
          <a href={url} download="GSV_Resume.pdf" className="btn">
            Download Resume
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
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Resume;
