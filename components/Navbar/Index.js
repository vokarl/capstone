import styled from "styled-components";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <p>Polter hinzufügen</p>
      </Link>
      <Link href="/treelist">
        <p>Sortenwahl</p>
      </Link>

      <Link href="/resultlist/">
        <p>Ergebnisliste</p>
      </Link>
    </nav>
  );
};

export default Navbar;
