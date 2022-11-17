import React from 'react';
import { useLocalStorage } from '../../hooks/localStorage';
import { rotateRover } from '../../utils/roverActions';

const RoverTable: React.FC = () => {
  const [rovers, setRovers] = useLocalStorage('rovers');

  const test = (roverId: number) => {
    if (roverId < 0) {
      return alert('Rover not found!');
    }

    const rover = rovers[roverId-1];

    const rotateDirection = rover.instructions.charAt(0);

    const rotatedRover = rotateRover(rotateDirection, rover);

    rovers[roverId-1] = rotatedRover;

    setRovers(rovers);
  };

  return <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Initial Position (x, y, z)</th>
        <th>Instructions</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {rovers.map((rover: Rover) => (
        <tr key={rover.id}>
          <td>{rover.id}</td>
          <td>{rover.position.x}, {rover.position.x}, {rover.direction}</td>
          <td>{rover.instructions}</td>
          <td>
            <button onClick={() => test(rover.id ?? -1)}>Test</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>;
};

export default RoverTable;
