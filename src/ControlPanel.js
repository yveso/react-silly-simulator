import React from "react";
import Slider from "./primitives/Slider";

function ControlPanel({
  countAgents,
  setCountAgents,
  startingCountInfected,
  setStartingCountInfected,
  chanceOfInfection,
  setChanceOfInfection,
  lengthOfInfection,
  setLengthOfInfection,
  chanceOfDeath,
  setChanceOfDeath,
  submit
}) {
  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Slider
        id="countAgents"
        labelText="Größe der Gesamtbevölkerung"
        value={countAgents}
        setValue={setCountAgents}
        min="2"
      />
      <Slider
        id="countStartingInfected"
        labelText="Davon zu Beginn infiziert"
        value={startingCountInfected}
        setValue={setStartingCountInfected}
        max={countAgents - 1}
      />
      <Slider
        id="chanceOfInfection"
        labelText="Wahrscheinlichkeit einer Ansteckung bei Kontakt"
        value={chanceOfInfection}
        setValue={setChanceOfInfection}
        min="0"
        max="1"
        step="0.01"
        showPercentage
      />
      <Slider
        id="lengthOfInfection"
        labelText="Dauer einer Infektion in Sekunden"
        value={lengthOfInfection}
        setValue={setLengthOfInfection}
        max={20}
      />
      <Slider
        id="chanceOfDeath"
        labelText="Sterberate bei Infektion"
        value={chanceOfDeath}
        setValue={setChanceOfDeath}
        min="0"
        max="1"
        step="0.01"
        showPercentage
      />
      <input type="submit" value="Start" />
    </form>
  );
}

export default ControlPanel;
