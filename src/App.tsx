import React, { useState, useEffect } from "react";

import { Container, Area, Header, Content } from "./App.styles";
import logo from "./images/logo.svg";

import CharacterTable from "./components/CharacterTable";
import Loading from "./components/Loading";

import Api from "./services/api";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const res = await Api.getCharacters();
      if (res.data.code === 200) {
        setList(res.data.data.results);
        console.log(res);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

              <div className="searchInput">
                <input type="search" placeholder="Digite aqui" />
                <button type="button">Buscar</button>
              </div>
            </div>
          </div>

          <div className="characterArea">
            {!loading && list.length > 0 && <CharacterTable data={list} />}

            {loading && <Loading />}
          </div>
        </Content>
      </Area>
    </Container>
  );
};

export default App;
