import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

class Stats extends Component {
  state = {
    equipments: [
      { id: 1, value: "Mélangeurs", xp: 4.5 },
      { id: 2, value: "Caméras", xp: 4 },
      { id: 3, value: "Informatique", xp: 3.5 },
      { id: 4, value: "Lumière", xp: 2.5 },
      { id: 5, value: "Son", xp: 2.5 },
    ],
    tournages: [
      { id: 1, value: "Emission en direct", xp: 4.5 },
      { id: 2, value: "Evénementiel", xp: 4 },
      { id: 3, value: "Formation", xp: 4 },
      { id: 4, value: "Fiction", xp: 3 },
      { id: 5, value: "Sport", xp: 2.5 },
    ],
  };
  render() {
    let { equipments, tournages } = this.state;

    return (
      <div className="equipmentsTournages">
        <ProgressBar
          items={equipments}
          className="equipmentsDisplay"
          title="Matériels utilisés"
        />
        <ProgressBar
          items={tournages}
          className="tournagesDisplay"
          title="Tournages"
        />
      </div>
    );
  }
}

export default Stats;
