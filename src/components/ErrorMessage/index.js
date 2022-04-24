import React from "react";

import "./style.css";
import icon from "./death-star.png";
function ErrorMessage() {
  return (
    <div className="error-message">
      <img src={icon} alt="death-star" className="error-message__icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we already sent droids to fix it)</span>
    </div>
  );
}

export default ErrorMessage;
