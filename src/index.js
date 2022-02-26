import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Todo from "./components/Todo";
import Done from "./components/Done";
import styled from "styled-components";
import "./index.css"; //RiDeleteBin5Line

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  @media all and (max-width: 768px) {
     {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;


const TodoColumns = styled.div`
  display: flex;
  justify-content: space-evenly;
`

ReactDOM.render(
  <React.StrictMode>
    <AppContainer>
    <TodoColumns>
      <Todo />
      <Done />
    </TodoColumns>
    </AppContainer>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
