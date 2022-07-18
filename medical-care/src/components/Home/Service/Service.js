import React from "react";
import { useNavigate } from "react-router";

const Service = ({ service }) => {
  const { name, picture, about, balance, id } = service;
  const navigate = useNavigate();
  const sendCheckOut = () => {
    navigate("/checkout");
  };
  return (
    <div className="gx-4 col-12 col-lg-4 ">
      <div className="card">
        <img
          src={picture}
          className="card-img-top"
          alt="..."
          height="300px"
          className=" rounded"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{about}</p>
          <p>
            <span className="h4">Price:</span> {balance}
          </p>
          <button
            onClick={sendCheckOut}
            className="bg-success text-white border-0 rounded-pill fw-bold px-5 py-3"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
