import React from "react";
import "./index.css";

const Skills = (props) => {
  const { iconDetails } = props;
  const { icon } = iconDetails;
  return <li className="list-item">{React.createElement(icon, {})}</li>;
};

export default Skills;
