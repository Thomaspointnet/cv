import React from "react";

const Skills = () => {
  return (
    <div className="skills">
      <h3>Compétences</h3>
      <div className="list">
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Réalisation multi-caméras</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Gestion du stress en direct</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Direction d'équipes</span>
          </li>
        </ul>
        <ul>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Connaissances techniques</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Pédagogie</span>
          </li>
          <li>
            <i className="fas fa-check-square"></i>
            <span>Rigueur</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
