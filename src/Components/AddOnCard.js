import React from "react";

function AddOnCard({ data, plan, addData, setAddData }) {
  function handleSelect(id) {
    setAddData(
      addData.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            selected: !data.selected,
          };
        }
        return data;
      })
    );
  }
  return (
    <div
      className={`add--on--card ${data.selected ? "checked" : ""}`}
      onClick={() => handleSelect(data.id)}
    >
      <div className={data.selected ? "check select" : "check"}>
        <img
          src="./assets/images/icon-checkmark.svg"
          aria-hidden="true"
          alt=""
        />
      </div>
      <div className="add--on--info">
        <h5 className="add--on--title">{data.heading}</h5>
        <p>{data.subHeading}</p>
      </div>
      <div className="add--on--price">
        +$
        <span className="add--price">
          {plan ? data.priceYearly : data.priceMonth}
        </span>
        <span className="time">/yr</span>
      </div>
    </div>
  );
}

export default AddOnCard;
