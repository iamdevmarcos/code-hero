import { useState } from "react";

import { Container } from "./styles";

type Props = {
  filterCharacter: (characterName: string) => void;
  fetchData: () => void;
};

const SearchArea = ({ filterCharacter, fetchData }: Props) => {
  const [characterName, setCharacterName] = useState("");

  return (
    <Container>
      <h1>Busca de Personagens</h1>
      <div>
        <h2>
          {characterName !== "" && (
            <span>Você está pesquisando por: {characterName}</span>
          )}
          {characterName === "" && <span>Nome do Personagem:</span>}
        </h2>

        <div className="searchInput">
          <input
            type="search"
            placeholder="Digite aqui"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button type="button" onClick={() => filterCharacter(characterName)}>
            Buscar
          </button>

          <button type="button" onClick={() => fetchData()}>
            Resetar
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SearchArea;
