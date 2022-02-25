import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Todo from "./components/Todo";
import Done from "./components/Done";
import styled from "styled-components";
import React from "react";
const AppContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
