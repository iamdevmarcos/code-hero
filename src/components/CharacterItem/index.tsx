import { Container as Tr } from "./styles";

import { CharacterType } from "../../types/CharacterType";

const CharacterItem = ({
  id,
  name,
  thumbnail,
  series,
  events,
}: CharacterType) => {
  const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <Tr>
      <td className="characterName">
        <div>
          <img src={imgUrl} alt={name} />
        </div>
        <strong>{name}</strong>
      </td>
      <td className="characterSeries">
        <ul>
          {series.items.length >= 1 &&
            series.items
              .slice(0, 3)
              .map((serieInfo, index) => <li key={index}>{serieInfo.name}</li>)}

          {series.items.length <= 0 && (
            <li className="notEvent">Não disponível</li>
          )}
        </ul>
      </td>
      <td className="characterEvents">
        <ul>
          {events.items.length >= 1 &&
            events.items
              .slice(0, 3)
              .map((eventInfo, index) => <li key={index}>{eventInfo.name}</li>)}

          {events.items.length <= 0 && (
            <li className="notEvent">Não disponível</li>
          )}
        </ul>
      </td>
    </Tr>
  );
};

export default CharacterItem;
