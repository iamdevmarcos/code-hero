import React, { useState, useEffect } from "react";

import { Container, Area, Header, Content } from "./App.styles";
import logo from "./images/logo.svg";

import { CharacterType } from "./types/CharacterType";

import CharacterTable from "./components/CharacterTable";
import Loading from "./components/Loading";
import SearchArea from "./components/SearchArea";

import Api from "./services/api";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<CharacterType[]>([]);

  const fetchData = async () => {
    setLoading(true);

    const res = await Api.getCharacters();
    if (res.data.code === 200) {
      setList(res.data.data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const getCharacter = async () => {
  //   setLoading(true);
  //   const res = await Api.getSpecificCharacter();

  //   if (res.data.code === 200) {
  //     setList([]);
  //     setList(res.data.data.results);
  //     setLoading(false);
  //   } else {
  //     alert("Personagem não encontrado!");
  //   }
  // };

  const filterCharacter = (characterName: string) => {
    let newList = [...list];
    newList = newList.filter((item) =>
      item.name.toLowerCase().includes(characterName.toLowerCase())
    );

    if (newList.length > 0) {
      setList(newList);
    } else {
      alert("Personagem não encontrado!");
    }
  };

  return (
    <Container>
      <Header>
        <div className="leftSide">
          <a href="/">
            <img src={logo} alt="Objective" />
          </a>
        </div>
        <div className="rightSide">
          <strong>Marcos André</strong> Teste de Front-end
        </div>
      </Header>

      <Area>
        <Content>
          <SearchArea filterCharacter={filterCharacter} fetchData={fetchData} />

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
