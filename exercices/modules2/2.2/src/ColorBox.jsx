import { useState } from 'react';

// Liste des couleurs et du texte associé
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

const ColorBox = () => {
  // État pour la couleur actuelle (index de la couleur dans le tableau)
  const [colorIndex, setColorIndex] = useState(0);

  // Fonction pour passer à la prochaine couleur
  const nextColor = () => {
    setColorIndex((colorIndex + 1) % colors.length);
  };

  // Couleur actuelle et prochaine couleur
  const currentColor = colors[colorIndex];
  const nextColorText = colors[(colorIndex + 1) % colors.length];

  return (
    <div style={{ backgroundColor: currentColor, width: '200px', height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', margin: '10px' }}>
      <button onClick={nextColor}>{nextColorText}</button>
      <p>{currentColor}</p>
    </div>
  );
};

export default ColorBox;
