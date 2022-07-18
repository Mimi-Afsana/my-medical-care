import React from "react";
import Carusel from "./Carusel/Carusel";
import Clinik from "./Clinik/Clinik";
import HomeVisit from "./HomeVisit/HomeVisit";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Carusel></Carusel>
      <Services></Services>
      <Clinik></Clinik>
      <HomeVisit></HomeVisit>
    </div>
  );
};

export default Home;
