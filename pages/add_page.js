import styled from "styled-components";
import { allTrees } from "../resources/TreeArray";
import Link from "next/link";

const AddPage = () => {
  return (
    <StyledList>
      <Heading>Stammholz sortier Tool</Heading>
      <p>add tree</p>
      <Link href="./">
        <button>+</button>
      </Link>
    </StyledList>
  );
};

export default AddPage;

const ListItem = styled.li`
  text-align: left;
  padding: 20px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  background-color: rgb(54, 89, 0);
`;

const StyledList = styled.ul`
  list-style-type: disc;
`;
const Heading = styled.h1`
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: yellow;
  background-color: greenyellow;
`;
