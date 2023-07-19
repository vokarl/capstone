import styled from "styled-components";
import Link from "next/link";
const Navbar = () => {
  return (
    <StyledNav>
      <Link href="/">
        <StyledLinkCard>
          {" "}
          <p>Polter hinzufügen</p>{" "}
        </StyledLinkCard>
      </Link>

      <Link href="/treelist">
        <StyledLinkCard>
          {" "}
          <p>Sortenwahl</p>{" "}
        </StyledLinkCard>
      </Link>

      <Link href="/resultlist/">
        <StyledLinkCard>
          {" "}
          <p>Ergebnisliste</p>
        </StyledLinkCard>
      </Link>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  padding: 1rem;

  a {
    text-decoration: none;
    color: #333;
    margin: 0 1rem;
  }
`;
const StyledLinkCard = styled.div`
  background-color: lightgrey;
  border-radius: 2rem;
  padding: 1rem;
  margin: 0 1rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
