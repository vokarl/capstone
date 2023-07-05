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
      <Heading>Baumsortenwahl</Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        {treeTypes.map((treeType) => (
          <Link key={treeType} href={`/sortinglist/${treeType.toLowerCase()}`}>
            {" "}
            {/*${} hier einfaches template literal, da die Adresse ein string ist// dann to lowercase- wird im slug mit lower-
          case verglichen!!*/}
            {treeType}
          </Link>
        ))}
      </div>
    </>
  );
}
