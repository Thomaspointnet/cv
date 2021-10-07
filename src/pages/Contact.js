import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Lille</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0650677402">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Numéro copié !");
                  }}
                >
                  06 50 67 74 02
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="thomas.tournages@gmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("E-mail copié !");
                  }}
                >
                  thomas.tournages@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a
              href="https://fr.linkedin.com/in/thomas-petitprez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/Thomaspointnet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>GitHub</h4>
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.superprof.fr/realisateur-web-professionnel-intervenant-bts-audiovisuel-roubaix.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Superprof</h4>
              <div className="fontawesomeIcon">
                <FontAwesomeIcon icon={faBook} />
              </div>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
