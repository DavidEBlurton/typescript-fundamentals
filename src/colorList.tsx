import React from 'react';

const ColorList: React.FC = () => {
  const colors: string[] = ['Red', 'Green', 'Blue', 'Yellow'];

  return (
    <div>
      <h2>Color List:</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default ColorList;
