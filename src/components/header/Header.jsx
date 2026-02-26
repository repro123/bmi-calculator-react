import Container from "@/components/container/Container.jsx";
import Logo from "@/components/logo/Logo.jsx";

function Header() {
  return (
    <header className="pb-6 pt-10">
      <Container classNames="flex justify-center items-center lg:justify-start">
        <a href="#">
          <Logo />
        </a>
      </Container>
    </header>
  );
}

export default Header;
