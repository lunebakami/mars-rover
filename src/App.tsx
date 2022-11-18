import PlateauForm from './components/PlateauForm';
import RoverTable from './components/RoverTable';
import { useLocalStorage } from './hooks/localStorage';

function App() {
  const [plateau, setPlateau] = useLocalStorage('plateau', {
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
      <RoverTable plateau={plateau} />
    </div>
  );
}

export default App;
