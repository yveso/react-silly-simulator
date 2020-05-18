import agentStates from "./agentStates";
import {
  fullNumberPositiveOrNegative,
  fullNumberJustPositive
} from "./randomNumbers";

function initialGeneration(
  howMany,
  howManyInfected,
  howManyReasonable,
  howManyCovIdiots,
  maxWidth,
  maxHeight
) {
  return [...Array(howMany).keys()].map(idx => {
    const state = (i => {
      if (i < howManyInfected) {
        return agentStates.INFECTED;
      }
      if (i < howManyInfected + howManyReasonable) {
        return agentStates.REASONABLE;
      }
      if (i < howManyInfected + howManyReasonable + howManyCovIdiots) {
        return agentStates.COV_IDIOT;
      }
      return agentStates.NOT_YET;
    })(idx);

    const x = fullNumberJustPositive(maxWidth - 50) + 20;
    const y = fullNumberJustPositive(maxHeight - 50) + 20;

    const moveX =
      state !== agentStates.COV_IDIOT
        ? fullNumberPositiveOrNegative(10)
        : (400 - x) / 100;
    const moveY =
      state !== agentStates.COV_IDIOT
        ? fullNumberPositiveOrNegative(10)
        : (400 - y) / 100;

    return {
      x: x,
      y: y,
      moveX: moveX,
      moveY: moveY,
      state: state,
      originalState: state
    };
  });
}

export default initialGeneration;
