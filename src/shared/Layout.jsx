import { Container } from "components/Styles";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">에스파 팬레터 콜렉션</Link>
      </h1>
    </header>
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
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
}

export default React.memo(Layout);
