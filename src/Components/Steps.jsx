import React from "react";
import "./Styles.css";

export default function Steps({ carousel, updateIndex }) {
  function checkIndex(e) {
    const carouselChildren = carousel.current.children.length;
    let index = parseInt(e.target.textContent) - 1;
    // let realIndex = index - 1;
    if (index >= carouselChildren) {
      index = carouselChildren - 1;
    }
    updateIndex(index);
    // carousel.current.style.transform = `translateX(-${index * 100}%)`;
  }
  return (
    <div className="steps--wrapper">
      <div className="steps--container">
        <span onClick={checkIndex} className="step">
          1
        </span>
        <div className="steps">
          <p className="step--no">Step 1</p>
          <h1 className="step--name">your info</h1>
        </div>
      </div>
      <div className="steps--container">
        <span onClick={checkIndex} className="step">
          2
        </span>
        <div className="steps">
          <p className="step--no">Step 2</p>
          <h1 className="step--name">select plan</h1>
        </div>
      </div>
      <div className="steps--container">
        <span onClick={checkIndex} className="step">
          3
        </span>
        <div className="steps">
          <p className="step--no">Step 3</p>
          <h1 className="step--name">add-ons</h1>
        </div>
      </div>
      <div className="steps--container">
        <span onClick={checkIndex} className="step">
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
