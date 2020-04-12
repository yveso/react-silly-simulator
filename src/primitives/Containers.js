import styled from "styled-components";

const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: antiquewhite;
  display: flex;
  flex-direction: column;
`;

const MainDiv = styled.div`
  flex-grow: 2;
  margin: 20px 0px;
`;

export { AppDiv, MainDiv };
