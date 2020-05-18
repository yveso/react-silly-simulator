import agentStates from "./agentStates";
import {
  fullNumberPositiveOrNegative,
  fullNumberJustPositive
} from "./randomNumbers";

function initialGeneration(
  howMany,
  howManyInfected,
  startingCountReasonable,
  maxWidth,
  maxHeight
) {
  return [...Array(howMany).keys()].map(i => {
    return {
      x: fullNumberJustPositive(maxWidth - 50) + 20,
      y: fullNumberJustPositive(maxHeight - 50) + 20,
      moveX: fullNumberPositiveOrNegative(10),
      moveY: fullNumberPositiveOrNegative(10),
      state:
        i < howManyInfected
          ? agentStates.INFECTED
          : i < howManyInfected + startingCountReasonable
          ? agentStates.REASONABLE
          : agentStates.NOT_YET
    };
  });
}

export default initialGeneration;
