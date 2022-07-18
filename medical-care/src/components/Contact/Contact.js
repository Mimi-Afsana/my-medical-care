import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const submitForm = async () => {
    toast("Thank for yoru quiry. We will get back to you soon.");
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Your name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter your cantact number"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button
        onClick={submitForm}
        className="border-0 bg-success text-white px-5 py-2 rounded-pill fw-bold"
      >
        Submit
      </button>
      <ToastContainer />
    </div>
  );
};

export default Contact;
