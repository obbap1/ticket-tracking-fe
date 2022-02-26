import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Todo from "./components/Todo";
import Done from "./components/Done";
import styled from "styled-components";
import "./index.css"; //RiDeleteBin5Line

const AppContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media all and (max-width: 768px) {
     {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
      <Todo />
      <Done />
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
