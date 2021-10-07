import React from "react";
import Experience from "../components/Knowledges/Experience";
import Hobbies from "../components/Knowledges/Hobbies";
import Skills from "../components/Knowledges/Skills";
import Stats from "../components/Knowledges/Stats";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges">
      <Navigation />
      <div className="knowledgesContent">
        <Stats />
        <Experience />
        <Skills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
