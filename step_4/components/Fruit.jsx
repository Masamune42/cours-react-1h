export default function Fruit({ fruitInfo, onFruitDelete }) {
    //state
  
    // comportements
  
    // affichage
    return (
      <li>
        {fruitInfo.nom}{" "}
        <button onClick={() => onFruitDelete(fruitInfo.id)}>X</button>
      </li>
    );
  }
  