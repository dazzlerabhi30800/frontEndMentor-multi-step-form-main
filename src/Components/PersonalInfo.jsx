import React, { useRef } from "react";

const PersonalInfo = ({ updateIndex, activeIndex }) => {
  const nameInput = useRef();
  const emailInput = useRef();
  const phoneInput = useRef();

  function checkCredentials() {
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const name = nameInput.current;
    const email = emailInput.current;
    const phone = phoneInput.current;
    if (name.value == "") {
      setError(name, "Name can't be empty");
    } else if (name.value.length < 9) {
      setError(name, "Name cannot be short");
    } else {
      setSuccess(name, "Name is right");
    }

    if (email.value == "") {
      setError(email, "Email can't be empty");
    } else if (!mailFormat.test(email.value)) {
      setError(email, "Email is in wrong format");
    } else {
      setSuccess(email, "Email is right");
      // console.log(email.value);
    }

    if (phone.value == "") {
      setError(phone, "Phone no can't be empty");
    } else if (!phoneFormat.test(phone.value)) {
      // console.log(phoneFormat.test(phone.value));
      setError(phone, "Phone no is in wrong format");
    } else {
      // console.log(phoneFormat.test(phone.value));
      setSuccess(phone, "Phone No is right");
    }

    const errorContainer = document.querySelector(".wrong");
    if (!errorContainer) {
      updateIndex(activeIndex + 1);
    }
  }

  function setError(inputElement, message) {
    const parentElement = inputElement.parentElement;
    const errorSpan = parentElement.querySelector(".error");
    parentElement.classList.remove("success");
    parentElement.classList.add("wrong");
    errorSpan.textContent = message;
  }
  function setSuccess(inputElement, message) {
    const parentElement = inputElement.parentElement;
    const errorSpan = parentElement.querySelector(".error");
    parentElement.classList.remove("wrong");
    parentElement.classList.add("success");
    errorSpan.textContent = message;
  }
  return (
    <div className="info--wrapper">
      <div className="info--container">
        <h2 className="credentials">Profile Info</h2>
        <span className="desc">
          Please Provide your name, email and phone no
        </span>
        <form>
          <div className="input--container">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" ref={nameInput} />
            <span className="error">This field is required</span>
          </div>
          <div className="input--container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" ref={emailInput} />
            <span className="error">This field is required</span>
          </div>
          <div className="input--container">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" ref={phoneInput} />
            <span className="error">This field is required</span>
          </div>
        </form>
      </div>
      <div className="button--wrapper">
        <button onClick={checkCredentials} className="btn next end">
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
