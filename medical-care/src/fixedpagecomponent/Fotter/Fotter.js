import React from "react";
import "./Footer.css";
const Fotter = () => {
  // const date = new Date();
  // const year = date.getfullYear();
  return (
    <div className="bg-dark pt-5 mt-5 ps-5 pb-3 ">
      <div className="footer-style container">
        <div className="text-white">
          <h3>Explore</h3>
          <p>Home</p>
          <p>Services</p>
          <p>Blogs</p>
          <p>About</p>
        </div>
        <div className="text-white">
          <p> 8, Jalan Bukit Pantai, 59100 Kuala Lumpur,</p>
          <p>Malaysia</p>

          <h4>Contact me</h4>
          <p>darudulislam@gmail.com</p>
          <p>01117642890</p>
        </div>
        <div className="text-white">
          <h4>Follow</h4>
          <p>Facebook</p>
          <p>Instragram</p>
          <p>Twitter</p>
          <p>Linkedln</p>
        </div>
        <div className="text-white">
          <h4>Legal</h4>
          <p>Terms</p>
          <p>Policy</p>
        </div>
      </div>
      <p className="text-white container">
        Copyright © 2022 Pantai Medical Centre Sdn Bhd. All Rights Reserved.
        KKLIU 2567/2020
      </p>
    </div>
  );
};

export default Fotter;
