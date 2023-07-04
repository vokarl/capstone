import styled from "styled-components";
import Link from "next/link";

const StyledButton = styled.button`
  border: 6px solid black;
  background-color: darkorange;
  padding: 30px;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
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
