import { useState } from "react";
import { Container as Tr } from "./styles";

import Api from "../../services/api";

import CharacterInfo from "../CharacterInfo";
import { CharacterType } from "../../types/CharacterType";

import Modal from "react-modal";
Modal.setAppElement("#root");

const CharacterItem = ({
  id,
  name,
  thumbnail,
  series,
  events,
}: CharacterType) => {
  const [characterInfo, setCharacterInfo] = useState<CharacterType[]>([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = async () => {
    const res = await Api.getSpecificCharacter(id);
    setCharacterInfo(res.data.data.results);
    setModalOpen(true);
  };

  // Creating series image link
  const imgUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <>
      {/* Modal */}
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <CharacterInfo data={characterInfo} />
      </Modal>

      {/* Item */}
      <Tr onClick={handleOpenModal}>
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
                .map((serieInfo, index) => (
                  <li key={index}>{serieInfo.name}</li>
                ))}

            {series.items.length <= 0 && (
              <li className="noResult">Não disponível</li>
            )}
          </ul>
        </td>
        <td className="characterEvents">
          <ul>
            {events.items.length >= 1 &&
              events.items
                .slice(0, 3)
                .map((eventInfo, index) => (
                  <li key={index}>{eventInfo.name}</li>
                ))}

            {events.items.length <= 0 && (
              <li className="noResult">Não disponível</li>
            )}
          </ul>
        </td>
      </Tr>
    </>
  );
};

export default CharacterItem;
