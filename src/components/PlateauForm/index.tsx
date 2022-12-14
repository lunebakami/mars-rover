import React, { useState } from 'react';
import { Container, Form } from './styles';

// import { Container } from './styles';

type PlateauFormProps = {
  handleFormSubmit: Function;
};

const PlateauForm: React.FC<PlateauFormProps> = ({ handleFormSubmit }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    handleFormSubmit(x, y);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div className="input-group">
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
        </div>
        <button type="submit">Create Plateau</button>
      </Form>
    </Container>
  );
};

export default PlateauForm;
