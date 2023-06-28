import styled from "styled-components";
import TreeList from "../components/TreeList";

export default function HomePage() {
  return (
    <div>
      <Heading>Baumliste:</Heading>
      <TreeList />
    </div>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  color: yellow;
  background-color: greenyellow;
`;
