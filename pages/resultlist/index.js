import styled from "styled-components";

export default function ResultPage({ pileId, trees }) {
  return (
    <>
      <StyledP>Polter Id: {pileId}</StyledP>
      <StyledList>
        {trees.map((tree) => (
          <ListItem key={tree.treeId}>Baum Id: {tree.treeId}</ListItem>
        ))}
      </StyledList>
    </>
  );
}
const StyledP = styled.p`
  color: grey;
`;
const StyledList = styled.ul`
  color: grey;
`;
const ListItem = styled.li`
  list-style-type: none;
`;
