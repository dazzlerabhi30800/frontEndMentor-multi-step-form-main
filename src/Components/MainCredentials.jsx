import React, { useRef, useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import "./Styles.css";

function MainCredentials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carousel = useRef();

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
            <div className="container">
              <PersonalInfo
                updateIndex={updateIndex}
                activeIndex={activeIndex}
              />
            </div>
          </div>
          <div className="credentials--container">
            <div className="container">
              <Plan />
              <button
                onClick={() => updateIndex(activeIndex - 1)}
                className="prev"
              >
                back
              </button>
              <button
                onClick={() => updateIndex(activeIndex + 1)}
                className="next"
              >
                next
              </button>
            </div>
          </div>
          <div className="credentials--container">
            <Plan />
            <button
              onClick={() => updateIndex(activeIndex - 1)}
              className="prev"
            >
              back
            </button>
            <button
              onClick={() => updateIndex(activeIndex + 1)}
              className="next"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCredentials;
