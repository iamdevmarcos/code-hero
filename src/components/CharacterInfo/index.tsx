import { Container } from "./styles";

import { CharacterType } from "../../types/CharacterType";

type Props = {
  data: CharacterType[];
};

const CharacterInfo = ({ data }: Props) => {
  return (
    <Container>
      {data.map((item, index) => (
        <div key={index}>
          <div className="image">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
            />
          </div>
          <h2>{item.name}</h2>
          <hr />

          <ul>
            <h2>Séries</h2>
            <br />
            {item.series.items.length >= 1 &&
              item.series.items
                .slice(0, 3)
                .map((serieInfo, index) => (
                  <li key={index}>{serieInfo.name}</li>
                ))}

            {item.series.items.length <= 0 && (
              <li className="noResult">Não disponível</li>
            )}
          </ul>
          <br />

          <ul>
            <h2>Eventos</h2>
            <br />
            {item.events.items.length >= 1 &&
              item.events.items
                .slice(0, 3)
                .map((eventInfo, index) => (
                  <li key={index}>{eventInfo.name}</li>
                ))}

            {item.events.items.length <= 0 && (
              <li className="noResult">Não disponível</li>
            )}
          </ul>
        </div>
      ))}
    </Container>
  );
};

export default CharacterInfo;
