import React, { useRef, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import "./Styles.css";
import data from "./AddOnData";

function MainCredentials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [planPrice, setPlanPrice] = useState(0);
  const [addOnData, setAddOnData] = useState(data);
  const carousel = useRef();
  const [plan, setPlan] = useState(false);

  const updateIndex = (index) => {
    const childrenLength = carousel.current.children.length;

    if (index < 0) {
      index = 0;
    }
    if (index >= childrenLength) {
      index = childrenLength - 1;
    }
    carousel.current.style.transform = `translateX(-${index * 100}%)`;
    setActiveIndex(index);
  };
  return (
    <div className="credentials--wrapper">
      <div className="carousel--wrapper">
        <div className="carousel--container" ref={carousel}>
          <div className="credentials--container">
            <div className="container" id="one">
              <PersonalInfo
                updateIndex={updateIndex}
                activeIndex={activeIndex}
              />
            </div>
          </div>
          <div className="credentials--container">
            <div className="container">
              <Plan
                updateIndex={updateIndex}
                activeIndex={activeIndex}
                setPlanPrice={setPlanPrice}
                planPrice={planPrice}
                plan={plan}
                setPlan={setPlan}
              />
            </div>
          </div>
          <div className="credentials--container">
            <div className="container">
              <AddOns
                updateIndex={updateIndex}
                addOnData={addOnData}
                setAddOnData={setAddOnData}
                activeIndex={activeIndex}
                plan={plan}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCredentials;
