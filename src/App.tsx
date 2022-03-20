import React, { useState, useEffect } from "react";

import { Container, Area, Content, Pagination } from "./App.styles";

import { CharacterType } from "./types/CharacterType";

import Header from "./components/Header";
import SearchArea from "./components/SearchArea";
import CharacterTable from "./components/CharacterTable";
import Loading from "./components/Loading";

import Api from "./services/api";

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<CharacterType[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    const offset = (currentPage - 1) * 10;

    const res = await Api.getCharacters(offset);
    if (res.data.code === 200) {
      setList(res.data.data.results);
      console.log(res);
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

  const handlePagination = (page: number) => {
    setCurrentPage(page);
  };

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const offset = (currentPage - 1) * 10;

      const res = await Api.getCharacters(offset);
      if (res.data.code === 200) {
        setList(res.data.data.results);
        console.log(res);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

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
          <SearchArea filterCharacter={filterCharacter} fetchData={fetchData} />

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
