import Container from "@/components/container/Container.jsx";
import Logo from "@/components/logo/Logo.jsx";

function Header() {
  return (
    <header className="p-6">
      <Container classNames="flex justify-center items-center">
        <a href="#">
          <Logo />
        </a>
      </Container>
    </header>
  );
}

export default Header;
