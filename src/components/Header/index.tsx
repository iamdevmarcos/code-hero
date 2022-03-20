import { Container } from "./styles";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <Container>
      <div className="leftSide">
        <a href="/">
          <img src={logo} alt="Objective" />
        </a>
      </div>
      <div className="rightSide">
        <strong>Marcos André</strong> Teste de Front-end
      </div>
    </Container>
  );
};

export default Header;
