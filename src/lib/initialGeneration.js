import agentStates from "./agentStates";
import {
  fullNumberPositiveOrNegative,
  fullNumberJustPositive
} from "./randomNumbers";

function initialGeneration(howMany, howManyInfected, maxWidth, maxHeight) {
  return [...Array(howMany).keys()].map(i => {
    return {
      x: fullNumberJustPositive(maxWidth),
      y: fullNumberJustPositive(maxHeight),
      moveX: fullNumberPositiveOrNegative(10),
      moveY: fullNumberPositiveOrNegative(10),
      state: i < howManyInfected ? agentStates.INFECTED : agentStates.NOT_YET
    };
  });
}

export default initialGeneration;
