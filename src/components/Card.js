import styled from "styled-components";
import { FaCheckCircle, FaRegTrashAlt } from "react-icons/fa";

const Container = styled.div`
  margin: 10px 5px 8px;
  text-transform: capitalize;
  background-color: #c5e1e6;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #939697;
  cursor: pointer;
  border-radius: 30px;
  background: #e0e0e0;
  box-shadow: 6px -6px 8px #9d9d9d, -6px 6px 8px #ffffff;

  button {
    height: 80%;
    width: 40px;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 25%;
    box-shadow: 6px -6px 8px #9d9d9d, -6px 6px 8px #ffffff;
  }
`;

function Card({ title, heading }) {
  return (
    <Container>
      {title}
      {heading === "todo" ? (
        <button>
          <FaCheckCircle style={{ color: "green" }} />
          <FaRegTrashAlt style={{ color: "#9e0808" }} />
        </button>
      ) : (
        <button style={{ backgroundColor: "#9e0808" }}>
          <FaRegTrashAlt style={{ color: "#ffffff" }} />
        </button>
      )}
    </Container>
  );
}

export default Card;
