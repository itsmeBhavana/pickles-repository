import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="pickle-loader">
        <div className="pickle"></div>
        <div className="pickle"></div>
        <div className="pickle"></div>
      </div>
      <p>Loading pickles...</p>
    </div>
  );
};

export default Loader;
