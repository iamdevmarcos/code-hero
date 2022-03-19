import { Container as Table } from "./styles";

import CharacterItem from "../CharacterItem";
import { CharacterType } from "../../types/CharacterType";

type Props = {
  data: CharacterType[];
};

const CharacterTable = ({ data }: Props) => {
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
        {data.map((item) => (
          <CharacterItem
            key={item.id}
            id={item.id}
            name={item.name}
            thumbnail={item.thumbnail}
            series={item.series}
            events={item.events}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default CharacterTable;
