import React from "react";
import Slider from "./primitives/Slider";

function ControlPanel({
  countAgents,
  setCountAgents,
  startingCountInfected,
  setStartingCountInfected,
  startingCountReasonable,
  setStartingCountReasonable,
  chanceOfInfection,
  setChanceOfInfection,
  chanceOfInfectionReasonable,
  setChanceOfInfectionReasonable,
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
        min={startingCountInfected + startingCountReasonable}
      />
      <Slider
        id="countStartingInfected"
        labelText="Anzahl Infizierte"
        value={startingCountInfected}
        setValue={setStartingCountInfected}
        max={countAgents - startingCountReasonable}
      />
      <Slider
        id="countStartingReasonable"
        labelText="Anzahl Vernünftige"
        value={startingCountReasonable}
        setValue={setStartingCountReasonable}
        min="0"
        max={countAgents - startingCountInfected}
      />
      <Slider
        id="chanceOfInfection"
        labelText="Wahrscheinlichkeit einer Ansteckung bei Kontakt"
        value={chanceOfInfection}
        setValue={setChanceOfInfection}
        min={chanceOfInfectionReasonable}
        max="1"
        step="0.01"
        showPercentage
      />
      <Slider
        id="chanceOfInfectionReasonable"
        labelText="Wahrscheinlichkeit einer Ansteckung bei Kontakt und Schutzmaßnahmen"
        value={chanceOfInfectionReasonable}
        setValue={setChanceOfInfectionReasonable}
        min="0"
        max={chanceOfInfection}
        step="0.01"
        showPercentage
      />
      <Slider
        id="lengthOfInfection"
        labelText="Dauer einer Infektion in Generationen"
        value={lengthOfInfection}
        setValue={setLengthOfInfection}
        min="0"
        max={20 * 25}
        step="25"
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
