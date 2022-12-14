import React, { useState, useEffect } from "react";
import PersonalInfo from "./PersonalInfo";
import Plan from "./Plan";
import AddOns from "./AddOns";
import "./Styles.css";
import data from "./AddOnData";
import Finish from "./Finish";
import Thanks from "./Thanks";

function MainCredentials({
  carousel,
  setActiveIndex,
  activeIndex,
  updateIndex,
}) {
  // const [activeIndex, setActiveIndex] = useState(0);
  const [planPrice, setPlanPrice] = useState(0);
  const [planName, setPlanName] = useState("");
  const [addOnData, setAddOnData] = useState(data);
  const [plan, setPlan] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  const filterHandler = () => {
    setFilteredData(addOnData.filter((data) => data.selected === true));
  };

  const handleSort = () => {
    setSortedData(filteredData.sort((a, b) => a.id < b.id));
  };
  useEffect(() => {
    filterHandler();
  }, [addOnData]);

  useEffect(() => {
    handleSort();
  }, [addOnData, filteredData]);

  // const updateIndex = (index) => {
  //   const childrenLength = carousel.current.children.length;

  //   if (index < 0) {
  //     index = 0;
  //   }
  //   if (index >= childrenLength) {
  //     index = childrenLength - 1;
  //   }
  //   carousel.current.style.transform = `translateX(-${index * 100}%)`;
  //   setActiveIndex(index);
  // };
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
            <div className="container" id="two">
              <Plan
                updateIndex={updateIndex}
                activeIndex={activeIndex}
                setPlanPrice={setPlanPrice}
                planPrice={planPrice}
                plan={plan}
                setPlan={setPlan}
                setPlanName={setPlanName}
                planName={setPlanName}
              />
            </div>
          </div>
          <div className="credentials--container">
            <div className="container" id="three">
              <AddOns
                updateIndex={updateIndex}
                addOnData={addOnData}
                setAddOnData={setAddOnData}
                activeIndex={activeIndex}
                plan={plan}
                setFilteredData={setFilteredData}
                filteredData={filteredData}
              />
            </div>
          </div>
          <div className="credentials--container">
            <div className="container">
              <Finish
                updateIndex={updateIndex}
                sortedData={sortedData}
                activeIndex={activeIndex}
                plan={plan}
                planPrice={planPrice}
                planName={planName}
              />
            </div>
          </div>
          <div className="credentials--container">
            <div className="container">
              <Thanks
                updateIndex={updateIndex}
                sortedData={sortedData}
                activeIndex={activeIndex}
                plan={plan}
                planPrice={planPrice}
                planName={planName}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCredentials;
