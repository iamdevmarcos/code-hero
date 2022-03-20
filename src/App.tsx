import React, { useState, useEffect } from "react";

import { Container, Area, Content, Pagination } from "./App.styles";

import { CharacterType } from "./types/CharacterType";

import Header from "./components/Header";
import SearchArea from "./components/SearchArea";
import CharacterTable from "./components/CharacterTable";
import Loading from "./components/Loading";

import Api from "./services/api";

import { reloadPage } from "./utils/window";

const App: React.FC = () => {
  const [list, setList] = useState<CharacterType[]>([]);
  const [loading, setLoading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const offset = (currentPage - 1) * 10;

      const res = await Api.getCharacters(offset);
      if (res.data.code === 200) {
        setList(res.data.data.results);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const filterCharacter = (characterName: string) => {
    if (characterName !== "") {
      let newList = [...list];
      newList = newList.filter((item) =>
        item.name.toLowerCase().includes(characterName.toLowerCase())
      );

      if (newList.length > 0) {
        setList(newList);
      } else {
        alert("Personagem não encontrado! Resetando a lista...");
        reloadPage();
      }
    } else {
      alert("Digite o nome do personagem!");
    }
  };

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

  // creating pagination array and setting limit to 5 pages
  const pagination = [];
  for (let i = 1; i <= 5; i++) {
    pagination.push(i);
  }

  return (
    <Container>
      <Header />

      <Area>
        <Content>
          <SearchArea filterCharacter={filterCharacter} />

          <div className="characterArea">
            {!loading && list.length > 0 && <CharacterTable data={list} />}

            {loading && <Loading />}
          </div>
        </Content>
      </Area>
      {!loading && list.length > 0 && (
        <Pagination>
          {pagination.map((item, index) => (
            <div
              key={index}
              className={item === currentPage ? "active" : ""}
              onClick={() => handlePagination(item)}
            >
              {item}
            </div>
          ))}
        </Pagination>
      )}
    </Container>
  );
};

export default App;
