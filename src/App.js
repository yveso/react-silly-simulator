import React from "react";
import AppDiv from "./primitives/AppDiv";
import ControlPanel from "./ControlPanel";
import Simulation from "./Simulation";

function App() {
  const [countAgents, setCountAgents] = React.useState(20);
  const [startingCountInfected, setStartingCountInfected] = React.useState(2);
  const [chanceOfInfection, setChanceOfInfection] = React.useState(0.1);
  const [lengthOfInfection, setLengthOfInfection] = React.useState(10);
  const [chanceOfDeath, setChanceOfDeath] = React.useState(0.1);

  const [showSimualtion, setShowSimulation] = React.useState(false);

  return (
    <AppDiv>
      <h1>Silly Simulator</h1>
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
    </AppDiv>
  );
}

export default App;
