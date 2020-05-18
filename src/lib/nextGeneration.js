import agentStates from "./agentStates";
import { fullNumberPositiveOrNegative } from "./randomNumbers";

function distance(agent, other) {
  return Math.sqrt((agent.x - other.x) ** 2 + (agent.y - other.y) ** 2);
}

function nextGeneration(
  oldGeneration,
  width,
  height,
  chanceOfInfection,
  chanceOfInfectionReasonable,
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
          currentAgent.state = agentStates.HEALED;
        }
      }
    } else {
      for (let other of next.filter(x => x.state === agentStates.INFECTED)) {
        const dist = distance(currentAgent, other);
        if (
          dist < 25 &&
          Math.random() <
            (currentAgent.state === agentStates.REASONABLE
              ? chanceOfInfectionReasonable
              : chanceOfInfection)
        ) {
          currentAgent.state = agentStates.INFECTED;
          break;
        }
      }
    }

    const newX =
      currentAgent.x + currentAgent.moveX + fullNumberPositiveOrNegative();
    const newY =
      currentAgent.y + currentAgent.moveY + fullNumberPositiveOrNegative();

    if (currentAgent.originalState !== agentStates.COV_IDIOT) {
      if (newX > 0 && newX < width - 25) {
        currentAgent.x = newX;
        currentAgent.moveX += fullNumberPositiveOrNegative(2);
        if (Math.abs(currentAgent.moveX) > 12) {
          currentAgent.moveX += currentAgent.moveX > 0 ? -5 : 5;
        }
      } else {
        currentAgent.moveX = -1 * currentAgent.moveX;
      }
      if (newY > 15 && newY < height - 5) {
        currentAgent.y = newY;
        currentAgent.moveY += fullNumberPositiveOrNegative(2);
        if (Math.abs(currentAgent.moveY) > 12) {
          currentAgent.moveY += currentAgent.moveY > 0 ? -5 : 5;
        }
      } else {
        currentAgent.moveY = -1 * currentAgent.moveY;
      }
    } else {
      const magicNumber = 475;
      const dist = distance(
        { x: newX, y: newY },
        { x: magicNumber, y: magicNumber }
      );
      if (dist > 100) {
        currentAgent.x = newX;
        currentAgent.y = newY;
      } else if (dist > 50) {
        currentAgent.x = newX;
        currentAgent.y = newY;
        currentAgent.moveX *= 0.5;
        currentAgent.moveY *= 0.5;
      } else {
        currentAgent.moveX = fullNumberPositiveOrNegative(5);
        currentAgent.x += fullNumberPositiveOrNegative(5);
        currentAgent.moveY = fullNumberPositiveOrNegative(5);
        currentAgent.y += fullNumberPositiveOrNegative(5);
      }
    }
  }

  return next;
}

export default nextGeneration;
