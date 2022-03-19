import { Container as Table } from "./styles";

import CharacterItem from "../CharacterItem";

const CharacterTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Personagem</th>
          <th>Séries</th>
          <th>Eventos</th>
        </tr>
      </thead>
      <tbody>
        <CharacterItem />
      </tbody>
    </Table>
  );
};

export default CharacterTable;
