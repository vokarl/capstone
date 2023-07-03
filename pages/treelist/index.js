import styled from "styled-components";
import allTrees from "../../resources/treearray";

const StyledList = styled.ul`
  list-style-type: disc;
  background-color: black;
  margin: 30px;
`;
const ListItem = styled.li`
  text-align: left;
  padding-left: 5rem;
  padding-top: 2rem;

  color: yellowgreen;
  background-color: rgb(54, 89, 0);
`;
const H1 = styled.h1`
  text-align: center;
`;
const TreeList = () => {
  return (
    <>
      <H1>Baumarten</H1>
      <StyledList>
        {allTrees.map((tree) => (
          <ListItem key={tree.id}>{tree.name}</ListItem>
        ))}
      </StyledList>
    </>
  );
};

export default TreeList;
