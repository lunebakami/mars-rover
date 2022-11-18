export const rotateRover = (direction: string, rover: Rover) => {
  switch (direction) {
    case 'L':
      if (rover.direction === 'N') {
        rover.direction = 'W';
      } else if (rover.direction === 'W') {
        rover.direction = 'S';
      } else if (rover.direction === 'S') {
        rover.direction = 'E';
      } else {
        rover.direction = 'N';
      }
      break;
    default:
      if (rover.direction === 'N') {
        rover.direction = 'E';
      } else if (rover.direction === 'E') {
        rover.direction = 'S';
      } else if (rover.direction === 'S') {
        rover.direction = 'W';
      } else {
        rover.direction = 'N';
      }
      break;
  }

  return rover;
};

export const moveRover = (rover: Rover) => {
  const currentDirection = rover.direction;

  switch (currentDirection) {
    case 'N':
      rover.position.y += 1;
      break;
    case 'S':
      rover.position.y -= 1;
      break;
    case 'E':
      rover.position.x += 1;
      break;
    case 'W':
      rover.position.x -= 1;
      break;
  }

  return rover;
};

export const processRoverInstructions = (rover: Rover, plateau: Plateau) => {
  // Turn the instructions string into an array
  const instructions = rover.instructions.split('');

  // Clones the object, so it won't modify the original rover used in the final rover
  const resultRover = JSON.parse(JSON.stringify(rover));

  // Run through the instructions
  instructions.forEach((instruction) => {
    if (instruction === 'M') {
      moveRover(resultRover);
    } else {
      rotateRover(resultRover.direction, resultRover);
    }
  });

  // Validates if resulted position is out of bounds
  if (
    resultRover.position.x > plateau.upperRight[0] ||
    resultRover.position.y > plateau.upperRight[1]
  ) {
    throw new Error('Out of bounds!');
  } else if (
    resultRover.position.x < plateau.lowerLeft[0] ||
    resultRover.position.y < plateau.lowerLeft[1]
  ) {
    throw new Error('Out of bounds!');
  }

  // Creates a new rover with the final position
  const finalRover = {
    ...rover,
    finalPosition: {
      direction: resultRover.direction,
      x: resultRover.position.x,
      y: resultRover.position.y,
    },
  };

  return finalRover;
};
