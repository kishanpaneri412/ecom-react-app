import React, { useContext } from "react";
import { Data } from "../../context/DataProvider";

const About = () => {
  const context = useContext(Data);

  return <div>Count: {context.count}</div>;
};

export default About;
