import React from "react";

const ProgressBar = (props) => {
  return (
    <div className={props.className}>
      <h3>{props.title}</h3>

      <div>
        {props.items.map((item) => {
          let mastery = 5;
          let progressBar = (item.xp / mastery) * 100 + "%";

          return (
            <div key={item.id} className="equipementsList">
              <li>{item.value}</li>
              <div className="progressBar" style={{ width: progressBar }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
