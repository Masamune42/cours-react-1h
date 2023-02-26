import { useState } from "react";

function App() {
  // state (état, données)
  const [compteur, setCompteur] = useState(1);

  // comportements
  const handleClick = () => {
    // compteur = compteur + 1
    setCompteur(compteur + 1);
  };

  // affichage (render)
  return (
    <div>
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémente</button>
    </div>
  );
}

export default App;
