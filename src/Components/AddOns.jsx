import React from "react";
import AddOnCard from "./AddOnCard";

function AddOns({ addOnData, setAddOnData, updateIndex, activeIndex, plan }) {
  const AddOnComp = addOnData.map((data, i) => {
    return (
      <AddOnCard
        plan={plan}
        data={data}
        key={i}
        setAddData={setAddOnData}
        addData={addOnData}
      />
    );
  });
  return (
    <div className="add--on--wrapper">
      <div className="add--on--container">
        <h4 className="add--on--title">Pick Add Ons</h4>
        <span className="add--on--desc">
          Add-ons help enhance your gaming experience
        </span>
        <div className="add--on--choose--wrapper">{AddOnComp}</div>
      </div>
      {/* Button Wrapper */}
      <div className="button--wrapper">
        <button
          onClick={() => updateIndex(activeIndex - 1)}
          className="btn prev"
        >
          Go Back
        </button>
        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className="btn next"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default AddOns;
