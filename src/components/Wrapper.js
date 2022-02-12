import styled from 'styled-components'

export const Container =  styled.div`
  height: 500px;
  width: 250px;
  background-color: #fff7f7;
`

export const Heading = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;



`
function Wrapper({heading, children}) {
  return <Container>
    <Heading>{heading}</Heading>

    {children}
  </Container>
}

export default Wrapper