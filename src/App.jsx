import React from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Colloboration from "./components/Colloboration";
import Services from "./components/Services";

const App = () => {
  return (
    <React.Fragment>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Colloboration />
        <Services />
      </div>
      <ButtonGradient />
    </React.Fragment>
  );
};

export default App;
