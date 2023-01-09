import "./App.css";
import React, { useRef, useState, useEffect } from "react";
import MainCredentials from "./Components/MainCredentials";
import Steps from "./Components/Steps";

function App() {
  const carousel = useRef();
  const stepsContainer = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const [steps, setSteps] = useState(0);

  // Updating the credentials steps
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

  // check index and add active class to the steps
  function checkIndex(index) {
    const carouselChildren = carousel.current.children.length;
    console.log(carouselChildren - 1);
    const stepsContainerChild = stepsContainer.current.children;
    if (index >= carouselChildren - 1) {
      Object.values(stepsContainerChild).forEach(function (value) {
        value.classList.remove("active");
      });
      stepsContainerChild[carouselChildren - 2].classList.add("active");
      carousel.current.style.transform = `translateX(-${
        (carouselChildren - 1) * 100
      }%)`;
    } else {
      Object.values(stepsContainerChild).forEach(function (value) {
        value.classList.remove("active");
      });
      stepsContainerChild[index].classList.add("active");
      carousel.current.style.transform = `translateX(-${index * 100}%)`;
    }
    setActiveIndex(index);
  }

  useEffect(() => {
    checkIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div className="App">
      <main>
        <Steps
          updateIndex={updateIndex}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          carousel={carousel}
          setSteps={setSteps}
          steps={steps}
          stepsContainer={stepsContainer}
          checkIndex={checkIndex}
        />
        <MainCredentials
          updateIndex={updateIndex}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          carousel={carousel}
          setSteps={setSteps}
          steps={steps}
          stepsContainer={stepsContainer}
        />
      </main>
    </div>
  );
}

export default App;
