import React from "react";
import "./Carusel.css";

const Carusel = () => {
  return (
    <div>
      <div className="describe container mt-3 ">
        <div>
          <img
            className="rounded"
            width="450"
            height="400px"
            src={"https://i.ibb.co/NpvprTp/islam-photo-for-assmnt-10-removebg-preview123.png"}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-primary mb-5 mt-5">Dr. Darudul Islam</h4>
          <h5 className="text-primary mb-2">SPECIALTY</h5>
          <p className="h6 mb-5">Orthopaedic Surgery</p>
          <h4 className="text-primary mb-2">SUB SPECIALTY</h4>
          <p className="h6 mb-5">Orthopaedic Surgery - Spine</p>
          <button className="border-0 bg-success text-white fw-bold p-2 rounded-pill px-4">
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>

      <div className="describes container mt-5 ">
        <div>
          <h5 className="text-primary fw-bold">HOSPITALS</h5>
          <p className="text-primary">Pantai Hospital Kuala Lumpur</p>
          <p>No. A208 - Spine & Joint Centre, 2nd Floor, Block A,</p>
          <p>8, Jalan Bukit Pantai 59100 Kuala Lumpur, Malaysia</p>
          <p>+603-22960416 Ext. 2416</p>
          <p>+603-22960422 Ext. 2422</p>
        </div>
        <div>
          <h5 className="text-primary fw-bold">QUALIFICATIONS</h5>
          <p>MCh Orth (Liverpool), FRCS (Edin)</p>
        </div>
        <div>
          <h5 className="text-primary fw-bold">LANGUAGE SPOKEN</h5>
          <p>English, Bangla</p>
        </div>
      </div>
      <div className="container">
        <hr />
      </div>
    </div>
  );
};

export default Carusel;
