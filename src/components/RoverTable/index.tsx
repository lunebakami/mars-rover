import React from 'react';
import { useLocalStorage } from '../../hooks/localStorage';
import { processRoverInstructions } from '../../utils/roverActions';
import AddRover from '../AddRover';

type RoverTableProps = {
  plateau: Plateau;
};

const RoverTable: React.FC<RoverTableProps> = ({ plateau }) => {
  const [rovers, setRovers] = useLocalStorage('rovers');

  const run = (roverId: number) => {
    try {
      // Validates if rover id
      if (roverId < 0) {
        return alert('Rover not found!');
      }

      // Get the rover
      const rover = rovers[roverId - 1];

      const resultRover = processRoverInstructions(rover, plateau);

      // Updates the rover in it's position
      rovers[roverId - 1] = resultRover;

      // Updates the rovers state with a new Array
      setRovers([...rovers]);
    } catch (error: any) {
      alert(error.message);
      console.log(error);
    }
  };

  const runAllInstructions = () => {
    rovers.map((rover: Rover) => run(rover.id ?? -1));
  };

  return (
    <>
      <AddRover setRovers={setRovers} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Initial Position (x, y, z)</th>
            <th>Instructions</th>
            <th>Result</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rovers.map((rover: Rover) => (
            <tr key={rover.id}>
              <td>{rover.id}</td>
              <td>
                {rover.position.x}, {rover.position.y}, {rover.direction}
              </td>
              <td>{rover.instructions}</td>
              <td>
                {rover.finalPosition ? (
                  <span>
                    {rover.finalPosition?.x}, {rover.finalPosition?.y},{' '}
                    {rover.finalPosition?.direction}
                  </span>
                ) : (
                  'Not generated'
                )}
              </td>
              <td>
                <button onClick={() => run(rover.id ?? -1)}>
                  Run Instructions
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={() => runAllInstructions()}>Run All Instructions</button>
    </>
  );
};

export default RoverTable;
