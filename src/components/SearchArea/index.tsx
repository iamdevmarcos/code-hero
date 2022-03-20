import { useState } from "react";
import { Container } from "./styles";

import { reloadPage } from "../../utils/window";

type Props = {
  filterCharacter: (characterName: string) => void;
};

const SearchArea = ({ filterCharacter }: Props) => {
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

          <button type="button" onClick={() => reloadPage()}>
            Resetar
          </button>
        </div>
      </div>
    </Container>
  );
};

export default SearchArea;
