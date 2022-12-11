import React, { useRef } from "react";

const PersonalInfo = ({ updateIndex, activeIndex }) => {
  return (
    <div className="info--wrapper">
      <div className="info--container">
        <h2 className="credentials">Profile Info</h2>
        <span className="desc">Please Provide your name, email, Phone</span>
        <form>
          <div className="input--container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <span className="error"></span>
          </div>
          <div className="input--container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
            <span className="error"></span>
          </div>
          <div className="input--container">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" />
            <span className="error"></span>
          </div>
        </form>
      </div>
      <div className="button--wrapper">
        <button
          onClick={() => updateIndex(activeIndex + 1)}
          className="btn next end"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
