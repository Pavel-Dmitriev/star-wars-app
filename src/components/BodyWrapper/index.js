import React from "react";

function BodyWrapper({ left, right }) {
  return (
    <div className="row mt-2 mb-2">
      <div className="col-md-6 mt-2">{left}</div>
      <div className="col-md-6 mt-2">{right}</div>
    </div>
  );
}

export default BodyWrapper;
