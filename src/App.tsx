import React, { useState, useEffect } from "react";

import { Container, Area, Content } from "./App.styles";

import { CharacterType } from "./types/CharacterType";

import Header from "./components/Header";
import SearchArea from "./components/SearchArea";
import CharacterTable from "./components/CharacterTable";
import Loading from "./components/Loading";

import Api from "./services/api";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<CharacterType[]>([]);

  const [totalItems, setTotalItems] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    const res = await Api.getCharacters();
    if (res.data.code === 200) {
      setList(res.data.data.results);
      setTotalItems(res.data.data.total);
      setLoading(false);
    }
  };

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (list.length > 0) {
      setPageCount(Math.ceil(totalItems / list.length));
    } else {
      setPageCount(0);
    }
  }, [totalItems, list.length]);

  // creating pagination array and setting limit to 20 pages
  const pagination = [];
  for (let i = 1; i <= 20; i++) {
    pagination.push(i);
  }

  return (
    <Container>
      <Header />

      <Area>
        <Content>
          <SearchArea filterCharacter={filterCharacter} fetchData={fetchData} />

          {/* <h2>Total de Paginas: {pageCount}</h2>
          <ul>
            {pagination.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul> */}

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
