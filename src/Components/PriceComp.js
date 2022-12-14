import React from "react";

const PriceComp = ({ data, plan }) => {
  return (
    <div className="price--summary--comp">
      <p className="price--comp--title">{data.heading}</p>
      <span className="summary--price">
        +${plan ? data.priceYearly : data.priceMonth}/{plan ? "yr" : "mo"}
      </span>
    </div>
  );
};

export default PriceComp;
