import React from 'react';

const Description = () => {
  const text =
    'The application could read in any one of the following commands: \n Example: \n PLACE 1,2,EAST \n MOVE \nLEFT \n REPORT \n' +
    'PLACE X,Y,F, (X, Y) is initial place, F is direction EAST/SOUTH/WEST/NORTH \n' +
    'MOVE, it will move the bus one unit forward in the direction which it is facing \n' +
    'LEFT/RIGHT, it will rotate the bus 90 degress in the specified direction \n' +
    'Report, it will output the place that car park \n ';
  return (
    <div className="new-line">
      <h2>Description:</h2>
      {text.split('\n').map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
    </div>
  );
};

export default Description;
