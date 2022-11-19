import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import AddRover from '../AddRover';

type RoverTableProps = {
  plateau: Plateau;
};

const RoverTable: React.FC<RoverTableProps> = ({ plateau }) => {
  const [rovers, setRovers] = useState([]);

  const loadRovers = async () => {
    const { data, status } = await api.get('/rover');

    if (status === 200) {
      setRovers(data);
    }
  };

  useEffect(() => {
    loadRovers();
  }, [rovers]);

  return (
    <>
      <AddRover plateau={plateau} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Initial Position (x, y, z)</th>
            <th>Instructions</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {rovers?.map((rover: Rover) => (
            <tr key={rover._id}>
              <td>{rover._id}</td>
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
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RoverTable;
