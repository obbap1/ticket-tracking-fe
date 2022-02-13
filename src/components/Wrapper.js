import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 30vw;
  padding: 30px 20px;
  margin-top: 10px;
  border-radius: 38px;
  box-shadow: 6px -6px 8px #9d9d9d, -6px 6px 8px #ffffff;

  @media all and (max-width: 768px) {
     {
      margin-bottom: 32px;
      width: 70vw;
    }
  }
`;

export const Heading = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  border-radius: 10px;
  box-shadow: 3px -3px 8px #9d9d9d, -3px 3px 8px #ffffff;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 24px;
  text-shadow: 2px -2px 6px #333;
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
