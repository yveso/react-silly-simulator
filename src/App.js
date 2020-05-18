import React from "react";
import { AppDiv, MainDiv } from "./primitives/Containers";
import Header from "./Header";
import ControlPanel from "./ControlPanel";
import Simulation from "./Simulation";
import Footer from "./Footer";

function App() {
  const [countAgents, setCountAgents] = React.useState(20);
  const [startingCountInfected, setStartingCountInfected] = React.useState(2);
  const [startingCountReasonable, setStartingCountReasonable] = React.useState(
    10
  );
  const [startingCountCovIdiot, setStartingCountCovIdiot] = React.useState(1);
  const [chanceOfInfection, setChanceOfInfection] = React.useState(0.1);
  const [
    chanceOfInfectionReasonable,
    setChanceOfInfectionReasonable
  ] = React.useState(0.05);
  const [lengthOfInfection, setLengthOfInfection] = React.useState(150);
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
              startingCountReasonable,
              setStartingCountReasonable,
              startingCountCovIdiot,
              setStartingCountCovIdiot,
              chanceOfInfection,
              setChanceOfInfection,
              chanceOfInfectionReasonable,
              setChanceOfInfectionReasonable,
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
              startingCountReasonable,
              startingCountCovIdiot,
              chanceOfInfection,
              chanceOfInfectionReasonable,
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
