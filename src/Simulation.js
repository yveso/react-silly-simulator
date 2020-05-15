import React from "react";
import useInterval from "./hooks/useInterval";
import Agent from "./primitives/Agent";
import Svg from "./primitives/Svg";
import agentStates from "./lib/agentStates";
import initialGeneration from "./lib/initialGeneration";
import nextGeneration from "./lib/nextGeneration";

function Simulation({
  countAgents,
  startingCountInfected,
  chanceOfInfection,
  lengthOfInfection,
  chanceOfDeath,
  backToSettings
}) {
  const width = 500;
  const height = 500;
  const fps = 24;

  const [agents, setAgents] = React.useState(() => newGeneration());
  const [generationCount, setGenerationCount] = React.useState(1);

  useInterval(
    () => {
      setAgents(
        nextGeneration(
          agents,
          width,
          height,
          chanceOfInfection,
          lengthOfInfection,
          chanceOfDeath
        )
      );
      setGenerationCount(generationCount + 1);
    },

    agents.filter(a => a.state === agentStates.INFECTED).length !== 0
      ? 1000 / fps
      : null
  );

  function newGeneration() {
    return initialGeneration(countAgents, startingCountInfected, width, height);
  }

  return (
    <div>
      <Svg width={width} height={height}>
        {agents.map((a, i) => (
          <Agent key={i} {...a} />
        ))}
      </Svg>
      <div>
        <strong>Generation #{generationCount}</strong>
        <ul>
          {Object.entries(agentStates).map(([key, state]) => (
            <li key={key}>
              {state.label} {state.emoji}:{" "}
              <strong>{agents.filter(a => a.state === state).length}</strong>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={backToSettings}>Zurück</button>
      <button
        onClick={() => {
          setAgents(newGeneration());
          setGenerationCount(1);
        }}
      >
        Erneut starten
      </button>
    </div>
  );
}

export default Simulation;
