import React from "react";

function Agent({ x, y, state }) {
  return (
    <text x={x} y={y}>
      {state.emoji}
    </text>
  );
}

export default Agent;
