export const rotateRover = (direction: string, rover: Rover) => {
  switch (direction) {
  case 'L':
    if (rover.direction === 'N') {
      rover.direction = 'W';
    }
    else if (rover.direction === 'W') {
      rover.direction = 'S';
    }
    else if (rover.direction === 'S') {
      rover.direction = 'E';
    }
    else {
      rover.direction = 'N';
    }
    break;
  default:
    if (rover.direction === 'N') {
      rover.direction = 'E';
    }
    else if (rover.direction === 'E') {
      rover.direction = 'S';
    }
    else if (rover.direction === 'S') {
      rover.direction = 'W';
    }
    else {
      rover.direction = 'N';
    }
    break;
  }

  return rover;
};
