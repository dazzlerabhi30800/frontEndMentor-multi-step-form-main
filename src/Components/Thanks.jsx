import React from "react";

function Thanks() {
  return (
    <div className="thanks--wrapper">
      <div className="thanks--container">
        <img
          src="./assets/images/icon-thank-you.svg"
          aria-hidden="true"
          alt=""
        />
        <span className="thank--you">Thank you!</span>
        <p className="thank--desc">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, feel free to email us at
          support@loremgaming.com
        </p>
      </div>
    </div>
  );
}

export default Thanks;
