import React from "react";
import "./Styles.css";

export default function Steps({ stepsContainer, checkIndex }) {
  return (
    <div className="steps--wrapper" ref={stepsContainer}>
      <div className="steps--container active">
        <span onClick={() => checkIndex(0)} className="step">
          1
        </span>
        <div className="steps">
          <p className="step--no">Step 1</p>
          <h1 className="step--name">your info</h1>
        </div>
      </div>
      <div className="steps--container">
        <span onClick={() => checkIndex(1)} className="step">
          2
        </span>
        <div className="steps">
          <p className="step--no">Step 2</p>
          <h1 className="step--name">select plan</h1>
        </div>
      </div>
      <div className="steps--container">
        <span onClick={() => checkIndex(2)} className="step">
          3
        </span>
        <div className="steps">
          <p className="step--no">Step 3</p>
          <h1 className="step--name">add-ons</h1>
        </div>
      </div>
      <div className="steps--container">
        <span onClick={() => checkIndex(3)} className="step">
          4
        </span>
        <div className="steps">
          <p className="step--no">Step 4</p>
          <h1 className="step--name">summary</h1>
        </div>
      </div>
    </div>
  );
}
