type Plateau = {
  lowerLeft: Array<number>;
  upperRight: Array<number>;
};

type Rover = {
  _id?: string;
  position: {
    x: number;
    y: number;
  };
  direction: string;
  instructions: string;
  finalPosition?: {
    x: number;
    y: number;
    direction: string;
  };
};
