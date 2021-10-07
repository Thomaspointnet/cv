import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faVihara } from "@fortawesome/free-solid-svg-icons";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <FontAwesomeIcon icon={faPlane} />
          <span>Aviation</span>
        </li>
        <li className="hobby">
          <FontAwesomeIcon icon={faUserShield} />
          <span>Cybersécurité</span>
        </li>
        <li className="hobby">
          <FontAwesomeIcon icon={faVihara} />
          <span>Arts Martiaux</span>
        </li>
        <li className="hobby">
          <FontAwesomeIcon icon={faGamepad} />
          <span>Jeux vidéos</span>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
