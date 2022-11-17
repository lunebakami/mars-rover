import React, { useState } from 'react';

// import { Container } from './styles';

type PlateauFormProps = {
  handleFormSubmit: Function
}

const PlateauForm: React.FC<PlateauFormProps> = ({
  handleFormSubmit
}) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    handleFormSubmit(x, y);
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
    <button type="submit">Create Plateau</button>
  </form>;
};

export default PlateauForm;
