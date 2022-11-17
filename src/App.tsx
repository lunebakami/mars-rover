import { useState } from 'react';
import PlateauForm from './components/PlateauForm';

type Plateau = {
  lowerLeft: Array<number>;
  upperRight: Array<number>;
};

function App() {
  const [plateau, setPlateau] = useState<Plateau>({
    lowerLeft: [0, 0],
    upperRight: [0, 0],
  });

  const handlePlateauFormSubmit = (x: number, y: number) => {
    setPlateau({
      lowerLeft: [0, 0],
      upperRight: [x, y],
    });
  };

  return (
    <div className="App">
      <div>
        Plateau Size: <br />
        Lower Left: ({plateau.lowerLeft.toString()}) <br />
        Upper Right: ({plateau.upperRight.toString()}) <br />
      </div>
      <PlateauForm handleFormSubmit={handlePlateauFormSubmit} />
    </div>
  );
}

export default App;
