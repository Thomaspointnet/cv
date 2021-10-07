import React, { Component } from "react";

class Project extends Component {
  state = {
    showInfo: false,
  };
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };
  render() {
    let { name, typesIcons, site, info, picture } = this.props.item;

    return (
      <div className="project">
        <div className="icons">
          {typesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>

        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="webSite">
                  <a
                    href={site}
                    rel="noopener noreferrer"
                    className="button"
                    target="blank"
                  >
                    {" "}
                    Site internet
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                Retour
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Project;
