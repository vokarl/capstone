import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  border: 6px solid black;
  background-color: darkorange;
  padding: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const AddPile = () => {
  return (
    <>
      <p>add pile</p>

      <Link href="/treelist">
        <StyledButton>+</StyledButton>
      </Link>
    </>
  );
};

export default AddPile;
