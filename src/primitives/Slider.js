import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
`;

const Div = styled.div`
  margin: 5px 10px 20px 10px;
`;

function Slider({
  id,
  labelText,
  value,
  setValue,
  min = 1,
  max = 100,
  step = 1,
  showPercentage = false
}) {
  return (
    <Div>
      <Label htmlFor={id}>
        {labelText}:{" "}
        <strong>
          {!showPercentage ? value : Math.round(value * 100) + "%"}
        </strong>
      </Label>
      <span>{!showPercentage ? min : Math.round(min * 100) + "%"}</span>
      <input
        id={id}
        type="range"
        onChange={event => setValue(event.target.valueAsNumber)}
        value={value}
        min={min}
        max={max}
        step={step}
      />
      <span>{!showPercentage ? max : Math.round(max * 100) + "%"}</span>
    </Div>
  );
}

export default Slider;
