import React, { useState, useEffect } from "react";
import PriceComp from "./PriceComp";

const Finish = ({
  plan,
  planPrice,
  planName,
  sortedData,
  updateIndex,
  activeIndex,
}) => {
  const [totalPrice, setTotalPrice] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const priceComp = sortedData.map((data) => {
    return <PriceComp plan={plan} data={data} key={data.id} />;
  });

  const handleTotalPrice = (data) => {
    if (data.length > 0) {
      var totalAddPrice = data.reduce(function (a, b) {
        return a + b;
      });
      let allTotalPrice = parseInt(totalAddPrice + planPrice);
      setAllPrice(allTotalPrice);
    } else {
      return;
    }
  };

  const handleTotalAddPrice = () => {
    if (plan) {
      setTotalPrice(
        sortedData.map((data) => {
          return data.priceYearly;
        })
      );
    } else {
      setTotalPrice(
        sortedData.map((data) => {
          return data.priceMonth;
        })
      );
    }
    // handleTotalPrice(totalPrice);
  };

  useEffect(() => {
    handleTotalAddPrice();
  }, [sortedData]);
  useEffect(() => {
    handleTotalPrice(totalPrice);
  }, [totalPrice]);
  return (
    <div className="finish--wrapper">
      <div className="finish--container">
        <h5 className="finish--title">Finishing Up</h5>
        <span className="finish--desc">
          Double check everything looks ok before confirming
        </span>
        <div className="total--price--wrapper">
          {/* plan wrapper */}
          <div className="plan--price--wrapper">
            <div className="plan--price--name">
              <p>
                {planName}({plan ? "yearly" : "monthly"})
              </p>
              <button
                onClick={() => updateIndex(activeIndex - 1)}
                className="change--btn"
              >
                change plan
              </button>
            </div>
            <span className="price">
              ${planPrice}/{plan ? "yr" : "mo"}
            </span>
          </div>
          {/* total summary container */}
          <div className="total--price--container">
            {/* Price Summary */}
            <div className="price--summary--container">{priceComp}</div>
            {/* Total price Comp */}
            <div className="total--price--comp">
              <p className="total">
                Total({plan ? "per yearly" : "per monthly"})
              </p>
              <span className="total--price">
                +${allPrice}/{plan ? "yr" : "mo"}
              </span>
            </div>
          </div>
        </div>
      </div>
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
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Finish;
