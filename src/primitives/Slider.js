import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  margin: 5px 0px 15px 0px;
`;

const Div = styled.div`
  margin: 5px 10px 20px 10px;
  padding-bottom: 10px;
  font-size: 1.2rem;
`;

const Span = styled.span`
  padding: 5px;
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
      <Span>{!showPercentage ? min : Math.round(min * 100) + "%"}</Span>
      <input
        id={id}
        type="range"
        onChange={event => setValue(event.target.valueAsNumber)}
        value={value}
        min={min}
        max={max}
        step={step}
      />
      <Span>{!showPercentage ? max : Math.round(max * 100) + "%"}</Span>
    </Div>
  );
}

export default Slider;
