import { Container } from "components/Styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
    </header>
  );
}

function Footer() {
  return <footer>푸터</footer>;
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

export default Layout;
