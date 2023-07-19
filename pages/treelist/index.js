import Link from "next/link";
import styled from "styled-components";
const Heading = styled.h1`
  text-align: center;
  color: yellowgreen;
  background-color: rgb(54, 89, 0);
`;

const treeTypes = [
  "Eichenstammholz",
  "Buchenstammholz",
  "Douglasien und Lärchenstammholz",
  "Fichten und Tannenstammholz",
  "Kiefernstammholz",
];

export default function TreeType() {
  return (
    <>
      <StyledHeading>Baumsortenwahl</StyledHeading>
      <StyledDiv>
        <CardContainer>
          {treeTypes.map((treeType) => (
            <Link
              key={treeType}
              href={`/sortinglist/${treeType.toLowerCase()}`}
            >
              <StyledLinkCard> {treeType}</StyledLinkCard>
            </Link>
          ))}
        </CardContainer>
      </StyledDiv>
    </>
  );
}

const StyledHeading = styled.h1`
  text-align: center;
  color: yellowgreen;
  background-color: rgb(54, 89, 0);
  margin: auto;
`;
const StyledDiv = styled.div`
  font-size: medium;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 40rem;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3rem;
  gap: 2rem;
`;
const StyledLinkCard = styled.div`
  background-color: #fff;
  border: 0.1rem solid #ccc;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
  width: fit-content;
`;
