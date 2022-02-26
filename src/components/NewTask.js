import React from "react";
import { useState } from "react";
import styled from "styled-components";

export const cards = [
  { title: "clean room" },
  { title: "clean house" },
  { title: "clean life" },
  { title: "eat food" },
];
const AddTask = styled.div`
  display: ${(props) => (props.addProp ? "block" : "none")};
  transition: ease-in-out 2s;
  flex-direction: column;
  width: -webkit-fill-available;
  /* width: 90%; */
  width: -webkit-fill-available;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: ease 2s;
`;
const Title = styled.div`
  display: flex;
  border: none;
  outline: none;
`;
const TitleInput = styled.input`
  font-family: "Roboto Mono", monospace, sans-serif;
  outline: none;
  font-weight: 600;
  border: none;

  padding: 0.5em;
  margin: 0.2em 1.5em;
  color: ${(props) => props.inputColor || "inherit"};
  background: inherit;
  border: none;
  border-radius: 3px;
`;
const Description = styled.div``;
const DescriptionInput = styled(TitleInput)`
  font-weight: normal;
`;
const Buttons = styled.div`
  display: flex;
  width: inherit;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const AddButton = styled.button`
  background: ${(props) => (props.primary ? "#031956" : "#031956")};
  color: ${(props) => (props.primary ? "#FFF7F7" : "#FFF7F7")};
  font-size: 0.8em;
  margin: 0 1em 1em 1em;
  padding: 0.25em 1.5em;
  border: 2px solid white;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
`;
const CancelButton = styled(AddButton)``;
const ShowAdd = styled(AddButton)`
  width: 80%;
  justify-content: center;
  display: ${(props) => (props.addProp2 ? "none" : "flex")};
  align-items: center;
  justify-items: center;
  width: -webkit-fill-available;
  &:hover {
    transition: ease 0.9s;
    opacity: 0.8;
    padding: 3px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
export default function NewTask() {
  const [card, newCards] = useState(cards);
  const [close, setClose] = useState(false);
  const handleClose = () => {
    setClose(!close);
  };

  const handleTask = () => {
    newCards(card.push({ title: "kelvin" }));
  };
  console.log(card);
  return (
    <Wrapper>
      <AddTask addProp={close}>
        <Title>
          <TitleInput placeholder="Task" type="text" />
        </Title>
        <Buttons>
          <AddButton>Add</AddButton>
          <CancelButton onClick={() => handleClose()}>Cancel</CancelButton>
        </Buttons>
      </AddTask>
      <ShowAdd onClick={() => handleClose()} addProp2={close}>
        <div onClick={handleTask}>+</div>
      </ShowAdd>
    </Wrapper>
  );
}
