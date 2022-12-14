import "./App.css";
import React, { useRef, useState } from "react";
import MainCredentials from "./Components/MainCredentials";
import Steps from "./Components/Steps";

function App() {
  const carousel = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
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
    <div className="App">
      <main>
        <Steps
          updateIndex={updateIndex}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          carousel={carousel}
        />
        <MainCredentials
          updateIndex={updateIndex}
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          carousel={carousel}
        />
      </main>
    </div>
  );
}

export default App;
