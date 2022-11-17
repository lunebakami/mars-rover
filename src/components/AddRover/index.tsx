import React, { useState } from 'react';

type Rover = {
  position: {
    x: number,
    y: number
  },
  direction: string,
  instructions: string
}

const AddRover: React.FC = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const rovers = JSON.parse(localStorage.getItem('rovers') ?? '[]');

    const rover: Rover = {
      position: {
        x,
        y
      },
      direction,
      instructions
    };

    rovers.push(rover);

    console.log(rovers);

    localStorage.setItem('rovers', JSON.stringify(rovers));
  };

  return <form onSubmit={handleSubmit}>
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
      onChange={(e) => setDirection(e.target.value)}
    />
    <input
      type="text"
      name="instructions"
      value={instructions}
      onChange={(e) => setInstructions(e.target.value)}
    />
    <button type="submit">Add Rover</button>
  </form>;
};

export default AddRover;
