import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px 0 5px;
  padding: 10px 0;
  text-transform: capitalize;

`

function Card({title}) {

  return <Container>{title}</Container>
}


export default Card;