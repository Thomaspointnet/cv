import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Thomas Petitprez</h1>
          <h2>Réalisateur Vidéo</h2>
          <div className="pdf">
            <a href="./media/CV Thomas Petitprez 2021.pdf" target="blank">
              Télécharger CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
