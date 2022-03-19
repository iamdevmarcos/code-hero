import { Container as Tr } from "./styles";

const CharacterItem = () => {
  return (
    <Tr>
      <td className="characterName">
        <div>
          <img src="/person.png" alt="" />
        </div>
        <strong>Abner Jenkins</strong>
      </td>
      <td className="characterSeries">
        <ul>
          <li>Iron Man: Armor Wars</li>
          <li>Old Man Hawkeye</li>
          <li>Fantastic Four Visionaries: Walter Simonson Vol. 1</li>
        </ul>
      </td>
      <td className="characterEvents">
        <ul>
          <li>Iron Man: Armor Wars</li>
          <li>Old Man Hawkeye</li>
          <li>Fantastic Four Visionaries: Walter Simonson Vol. 1</li>
        </ul>
      </td>
    </Tr>
  );
};

export default CharacterItem;
