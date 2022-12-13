import React, { useState, useRef } from "react";

function Plan({
  updateIndex,
  activeIndex,
  planPrice,
  setPlanPrice,
  plan,
  setPlan,
}) {
  const price = useRef();
  const planContainer = useRef();
  const handleToggle = () => {
    setPlan(!plan);
  };
  const handlePlan = (index) => {
    const children = planContainer.current.children;
    Object.values(children).map((child) => child.classList.remove("selected"));
    children[index].classList.add("selected");
  };

  function checkCredentials() {
    const checkContainer = document.querySelector(".selected");
    if (!checkContainer || checkContainer.length > 1) {
      alert("Please choose plan");
    } else {
      const planContainer = checkContainer.querySelector(
        ".plan--text--wrapper"
      );
      const price = planContainer.querySelector(".price span").textContent;
      const intPrice = parseInt(price);
      setPlanPrice(intPrice);
      updateIndex(activeIndex + 1);
    }
  }
  return (
    <div className="plan--wrapper">
      {/* plan container */}
      <div className="plan--container">
        <h3 className="plan--heading">Select your Plan</h3>
        <p className="plan--desc">
          You have the options of monthly or yearly billing
        </p>
        <div className="plan--choose--wrapper">
          {/* plan card container */}
          <div className="plan--choose--container" ref={planContainer}>
            <div onClick={() => handlePlan(0)} className="plan">
              <img
                src="./assets/images/icon-arcade.svg"
                alt="arcade"
                aria-hidden="true"
              />
              <div className="plan--text--wrapper">
                <h4 className="plan--title">Arcade</h4>
                <p className="price" ref={price}>
                  $<span>{plan ? "90" : "9"}</span>/month
                </p>
              </div>
            </div>
            <div className="plan" onClick={() => handlePlan(1)}>
              <img
                src="./assets/images/icon-advanced.svg"
                alt="advanced"
                aria-hidden="true"
              />
              <div className="plan--text--wrapper">
                <h4 className="plan--title">Advanced</h4>
                <p className="price">
                  $<span>{plan ? "120" : "12"}</span>/month
                </p>
              </div>
            </div>
            <div className="plan" onClick={() => handlePlan(2)}>
              <img
                src="./assets/images/icon-pro.svg"
                alt="pro"
                aria-hidden="true"
              />
              <div className="plan--text--wrapper">
                <h4 className="plan--title">Pro</h4>
                <p className="price">
                  $<span>{plan ? "150" : "15"}</span>/month
                </p>
              </div>
            </div>
          </div>
          {/* Toggle Wrapper  */}
          <div className={plan ? "toggle--wrapper toggled" : "toggle--wrapper"}>
            <span className="month">Monthly</span>
            <div
              className={plan ? "toggle--btn toggled" : "toggle--btn"}
              onClick={handleToggle}
            >
              <div className="circle"></div>
            </div>
            <span className="year">Yearly</span>
          </div>
        </div>
      </div>
      {/* Button Link Wrapper  */}
      <div className="button--wrapper">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className="btn prev"
        >
          Go Back
        </button>
        <button
          // onClick={() => updateIndex(activeIndex + 1)}
          onClick={checkCredentials}
          className="btn next"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default Plan;
