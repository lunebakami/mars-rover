import PlateauForm from './components/PlateauForm';
import RoverTable from './components/RoverTable';
import { useLocalStorage } from './hooks/localStorage';
import GlobalStyle from './styles.global';

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
      <GlobalStyle />
      <div className="plateau-info">
        <h2> Plateau Size:</h2>
        Lower Left: ({plateau.lowerLeft.toString()}) <br />
        Upper Right: ({plateau.upperRight.toString()}) <br />
      </div>
      <PlateauForm handleFormSubmit={handlePlateauFormSubmit} />
      <RoverTable plateau={plateau} />
    </div>
  );
}

export default App;
