import styled from "styled-components";

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  margin: 5px 5px 0 5px;
  padding: 20px 0;
  border-radius: 7px;
  margin-top: 10px;
  box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  -webkit-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 0px 16px -10px rgba(0, 0, 0, 1);
  text-transform: capitalize;
  &:hover {
    cursor: move;
  }
`;

function Card({ title }) {
  return <Container>{title}</Container>;
}

export default Card;
