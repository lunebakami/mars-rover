import React, { useState } from 'react';
import api from '../../services/api';
import { processRoverInstructions } from '../../utils/roverActions';

type AddRoverProps = {
  plateau: Plateau;
};

const AddRover: React.FC<AddRoverProps> = ({ plateau }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Builds the new rover object
    const rover: Rover = {
      position: {
        x,
        y,
      },
      direction,
      instructions,
    };

    const resultRover = processRoverInstructions(rover, plateau);

    const result = await api.post('/rover', resultRover);

    if (result.status === 200) {
      alert('Success');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          type="number"
          name="x"
          placeholder="Put the X coordinate"
          value={x}
          onChange={(e) => setX(Number(e.target.value))}
        />
        <input
          type="number"
          name="y"
          placeholder="Put the Y coordinate"
          value={y}
          onChange={(e) => setY(Number(e.target.value))}
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          name="direction"
          placeholder="Put the direction"
          value={direction}
          onChange={(e) => setDirection(e.target.value.toUpperCase())}
        />
        <input
          type="text"
          name="instructions"
          placeholder="Put the instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value.toUpperCase())}
        />
      </div>
      <button type="submit">Add Rover</button>
    </form>
  );
};

export default AddRover;
