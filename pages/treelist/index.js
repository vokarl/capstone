import styled from "styled-components";

const allTrees = [
  { id: 0, name: "Eichenstammholz" },
  { id: 1, name: "Buchenstammholz" },
  { id: 2, name: "Douglasienstammholz" },
  { id: 3, name: "Fichten-/Tannestammholz" },
  { id: 4, name: "Kiefernstammholz" },
];

const TreeList = () => {
  return (
    <StyledList>
      {allTrees.map((tree) => (
        <ListItem key={tree.id}>{tree.name}</ListItem>
      ))}
    </StyledList>
  );
};

export default TreeList;

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
