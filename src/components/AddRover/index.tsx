import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/localStorage';

type AddRoverProps = {
  setRovers: (value: Array<Rover> | Object) => void;
};

const AddRover: React.FC<AddRoverProps> = ({ setRovers }) => {
  const [rovers] = useLocalStorage('rovers');

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Builds the new rover object
    const rover: Rover = {
      id: rovers.length + 1,
      position: {
        x,
        y,
      },
      direction,
      instructions,
    };

    rovers.push(rover);

    // Updates the rovers state with a new Array
    setRovers([...rovers]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="x"
        value={x}
        onChange={(e) => setX(Number(e.target.value))}
      />
      <input
        type="number"
        name="y"
        value={y}
        onChange={(e) => setY(Number(e.target.value))}
      />
      <input
        type="text"
        name="direction"
        value={direction}
        onChange={(e) => setDirection(e.target.value.toUpperCase())}
      />
      <input
        type="text"
        name="instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value.toUpperCase())}
      />
      <button type="submit">Add Rover</button>
    </form>
  );
};

export default AddRover;
