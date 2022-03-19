import { Container, Area, Header, Content } from "./App.styles";
import logo from "./images/logo.svg";

import CharacterTable from "./components/CharacterTable";

const App = () => {
  return (
    <Container>
      <Header>
        <div className="leftSide">
          <img src={logo} alt="Objective" />
        </div>
        <div className="rightSide">
          <strong>Marcos André</strong> Teste de Front-end
        </div>
      </Header>

      <Area>
        <Content>
          <div className="searchArea">
            <h1>Busca de Personagens</h1>
            <div>
              <h2>Nome do personagem</h2>
              <input type="search" placeholder="Search" />
            </div>
          </div>

          <div className="characterArea">
            <CharacterTable />
          </div>
        </Content>
      </Area>
    </Container>
  );
};

export default App;
