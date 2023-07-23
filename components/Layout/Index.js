import styled from "styled-components";
import Navbar from "../Navbar/Index";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <MainContent>{children}</MainContent>
      <Navbar />
    </LayoutContainer>
  );
};
export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const MainContent = styled.div`
  flex: 1;
`;
