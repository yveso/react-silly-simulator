import React from "react";
import { AppDiv, MainDiv } from "./primitives/Containers";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Simulation from "./Simulation";
import Footer from "./Footer";

function App() {
  const [countAgents, setCountAgents] = React.useState(20);
  const [startingCountInfected, setStartingCountInfected] = React.useState(2);
  const [chanceOfInfection, setChanceOfInfection] = React.useState(0.1);
  const [lengthOfInfection, setLengthOfInfection] = React.useState(10);
  const [chanceOfDeath, setChanceOfDeath] = React.useState(0.1);

  const [showSimualtion, setShowSimulation] = React.useState(false);

  return (
    <AppDiv>
      <Header />
      <MainDiv>
        {!showSimualtion ? (
          <ControlPanel
            {...{
              countAgents,
              setCountAgents,
              startingCountInfected,
              setStartingCountInfected,
              chanceOfInfection,
              setChanceOfInfection,
              lengthOfInfection,
              setLengthOfInfection,
              chanceOfDeath,
              setChanceOfDeath
            }}
            submit={() => setShowSimulation(true)}
          />
        ) : (
          <Simulation
            {...{
              countAgents,
              startingCountInfected,
              chanceOfInfection,
              lengthOfInfection,
              chanceOfDeath
            }}
            backToSettings={() => setShowSimulation(false)}
          />
        )}
      </MainDiv>
      <Footer />
    </AppDiv>
  );
}

export default App;
