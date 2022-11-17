type Plateau = {
  lowerLeft: Array<number>;
  upperRight: Array<number>;
};

type Rover = {
  id?: number,
  position: {
    x: number,
    y: number
  },
  direction: string,
  instructions: string
}
