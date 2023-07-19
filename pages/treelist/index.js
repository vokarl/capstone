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
        {treeTypes.map((treeType) => (
          <Link key={treeType} href={`/sortinglist/${treeType.toLowerCase()}`}>
            {treeType}
          </Link>
        ))}
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 4rem;
`;
const StyledHeading = styled.h1`
  text-align: center;
  color: yellowgreen;
  background-color: rgb(54, 89, 0);
  margin: auto;
`;
