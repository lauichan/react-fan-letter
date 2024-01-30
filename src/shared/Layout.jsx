import { ContainerStyle, HeaderStyle, MainStyle } from "components/Styles";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderStyle>
      <h1>
        <Link to="/">에스파 팬레터 콜렉션</Link>
      </h1>
    </HeaderStyle>
  );
}

function Footer() {
  return (
    <footer>
      <a href="https://github.com/lauichan/react-fan-letter" target="_blank" rel="noreferrer">
        깃허브
      </a>
    </footer>
  );
}

function Layout({ children }) {
  return (
    <ContainerStyle>
      <Header />
      <MainStyle>{children}</MainStyle>
      <Footer />
    </ContainerStyle>
  );
}

export default React.memo(Layout);
