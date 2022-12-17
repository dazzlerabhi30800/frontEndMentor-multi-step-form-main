import React, { useRef } from "react";
import "./Styles.css";

export default function Steps({ carousel, updateIndex }) {
  const stepsContainer = useRef();
  function checkIndex(e) {
    const carouselChildren = carousel.current.children.length;
    const stepsContainerChild = stepsContainer.current.children;
    let index = parseInt(e.target.textContent) - 1;
    // let realIndex = index - 1;
    if (index >= carouselChildren) {
      index = carouselChildren - 1;
    }
    Object.values(stepsContainerChild).forEach(function (value) {
      value.classList.remove("active");
    });
    stepsContainerChild[index].classList.add("active");
    updateIndex(index);
    // carousel.current.style.transform = `translateX(-${index * 100}%)`;
  }
  return (
    <div className="steps--wrapper" ref={stepsContainer}>
      <div className="steps--container active">
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
