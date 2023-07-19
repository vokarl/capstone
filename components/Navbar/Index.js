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
  border: 0.1rem solid #ccc;
  border-radius: 1.3rem;
  padding: 0.4rem 2rem;
  margin: 1.4rem 1.3rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  box-shadow: 0rem 0.4rem 1rem rgba(0, 0, 0, 0.1);
  width: fit-content;
`;
