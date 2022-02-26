import React, { useState } from "react";
import Card from "./Card";
import Wrapper from "./Wrapper";
import styled from "styled-components";
import NewTask, { cards } from "./NewTask";

function Todo() {
  const [card, newCards] = useState(cards);
  return (
    <Wrapper heading="TODO">
      <NewTask />
      {cards.length &&
        cards.map((card, index) => <Card key={index} title={card.title} />)}
    </Wrapper>
  );
}

export default Todo;
