import React from "react";

class Preloader extends React.Component {
  render() {
    return (
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }
}

export default Preloader;
