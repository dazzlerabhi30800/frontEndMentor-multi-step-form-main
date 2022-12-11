import React from "react";
import "./Styles.css";

export default function Steps() {
  return (
    <div className="steps--wrapper">
      <div className="steps--container">
        <span className="step">1</span>
        <div className="steps">
          <p className="step--no">Step 1</p>
          <h1 className="step--name">your info</h1>
        </div>
      </div>
      <div className="steps--container">
        <span className="step">2</span>
        <div className="steps">
          <p className="step--no">Step 2</p>
          <h1 className="step--name">select plan</h1>
        </div>
      </div>
      <div className="steps--container">
        <span className="step">3</span>
        <div className="steps">
          <p className="step--no">Step 3</p>
          <h1 className="step--name">add-ons</h1>
        </div>
      </div>
      <div className="steps--container">
        <span className="step">4</span>
        <div className="steps">
          <p className="step--no">Step 4</p>
          <h1 className="step--name">summary</h1>
        </div>
      </div>
    </div>
  );
}
