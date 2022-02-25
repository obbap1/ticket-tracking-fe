import styled from "styled-components";
export const Container = styled.div`
  width: 250px;
  padding: 0 0 20px;
  background-color: #fff7f7;
`;

export const Heading = styled.div`
  height: 50px;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  background-color: #031956;
  border-radius: 5px;
  margin: 0 0 10px 0;
  color: white;
`;

function Wrapper({ heading, children }) {
  return (
    <Container>
      <Heading>{heading}</Heading>
      {children}
    </Container>
  );
}

export default Wrapper;
