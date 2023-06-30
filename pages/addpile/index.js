import styled from "styled-components";
import Link from "next/link";

const AddPile = () => {
  return (
    <StyledList>
      <p>add pile</p>
      <nav>
        <Link href="/treelist">
          <button>+</button>
        </Link>
      </nav>
    </StyledList>
  );
};

export default AddPile;

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
