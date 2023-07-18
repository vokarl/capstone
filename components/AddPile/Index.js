import styled from "styled-components";
import Link from "next/link";
import { HeadingStart } from "../HeadingStart";

const AddPile = ({ onRandomId }) => {
  return (
    <>
      {" "}
      <HeadingStart />
      <StyledContainer>
        <StyledP>Polter hinzufügen:</StyledP>

        <Link onClick={onRandomId} href="/treelist">
          <StyledLink>+</StyledLink>
        </Link>
      </StyledContainer>
    </>
  );
};

export default AddPile;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem;
`;
const StyledP = styled.p`
  text-align: center;
  padding: 5rem;

  font-size: 20px;
`;

const StyledLink = styled.p`
  background-color: darkorange;
  padding: 2rem;
  margin: 0;
  font-size: 20px;
  border-radius: 1rem;
`;
