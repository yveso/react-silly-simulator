import agentStates from "./agentStates";
import { fullNumberPositiveOrNegative } from "./randomNumbers";

function nextGeneration(
  oldGeneration,
  width,
  height,
  chanceOfInfection,
  lengthOfInfection,
  chanceOfDeath
) {
  let next = [...oldGeneration];

  for (let currentAgent of next) {
    if (currentAgent.state === agentStates.DEAD) {
      continue;
    }

    if (currentAgent.state === agentStates.INFECTED) {
      currentAgent.framesSinceInfection =
        ++currentAgent.framesSinceInfection || 1;
      if (currentAgent.framesSinceInfection > lengthOfInfection) {
        if (Math.random() < chanceOfDeath) {
          currentAgent.state = agentStates.DEAD;
        } else {
          currentAgent.state = agentStates.Healed;
        }
      }
    }

    if (currentAgent.state === agentStates.NOT_YET) {
      for (let other of next.filter(x => x.state === agentStates.INFECTED)) {
        const dist = Math.sqrt(
          (currentAgent.x - other.x) ** 2 + (currentAgent.y - other.y) ** 2
        );
        if (dist < 25 && Math.random() < chanceOfInfection) {
          currentAgent.state = agentStates.INFECTED;
          break;
        }
      }
    }

    const newX =
      currentAgent.x + currentAgent.moveX + fullNumberPositiveOrNegative();
    const newY =
      currentAgent.y + currentAgent.moveY + fullNumberPositiveOrNegative();

    if (newX > 0 && newX < width) {
      currentAgent.x = newX;
      currentAgent.moveX += fullNumberPositiveOrNegative(1);
    } else {
      currentAgent.moveX = -1 * currentAgent.moveX;
    }
    if (newY > 0 && newY < height) {
      currentAgent.y = newY;
      currentAgent.moveY += fullNumberPositiveOrNegative(1);
    } else {
      currentAgent.moveY = -1 * currentAgent.moveY;
    }
  }

  return next;
}

export default nextGeneration;
