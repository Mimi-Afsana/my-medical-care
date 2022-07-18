import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="container mt-5 my-goal">
      <div className="about-me">
        <div>
          <img
            src={"https://i.ibb.co/bLm9Qnp/Islam1.jpg"}
            alt=""
            className="w-100 rounded-circle"
            height="500px"
          />
        </div>
        <div>
          <div>
            <h2 className="mt-5 mb-5">Darudul Islam</h2>
            <h4 className="text-primary">About my goal.</h4>
            <p>
              My first and most important goal and another way of saying is only aim in my life to enhance my knowledge on medical seience and by using that knowledge to give free medical service to everybody. Because I believe every human being got right to get good treatment. 
              
            </p>
          </div>
          <div>
            <h4 className="text-primary">
              And how you will work hard to achieve your goal.
            </h4>
            <p>
              I know that what I think of it's not nesserary to everybody think the same way. I also it's really hard to achieve my goal. I am working hard on it to make it possible as much as I can. For that we build a doctor community with those people who are thinking same like me. I strongly believe slowly but surely one day our community will grow up and we can help more people. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
