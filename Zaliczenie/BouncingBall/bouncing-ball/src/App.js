import React, { useState, useEffect } from 'react';

const boardData = [
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', 'X', 'X', 'X', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', 'X', '0', '0', '0', '0', 'Y', '0', 'X'],
  ['X', '0', '0', 'X', 'X', 'X', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', 'X', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', 'Y', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', 'X'],
  ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
];

const BouncingBallGame = () => {
  const [ballPosition, setBallPosition] = useState({ x: 1, y: 1 });
  const [ballDirection, setBallDirection] = useState({ dx: 1, dy: 1 });


  useEffect(() => {
    const interval = setInterval(() => {
      const { x, y } = ballPosition;
      const { dx, dy } = ballDirection;
      const newX = x + dx;
      const newY = y + dy;

      if (boardData[newY][newX] === 'X') {
        let newDX = Math.random() > 0.5 ? -dx : dx;
        let newDY = Math.random() > 0.5 ? -dy : dy;
        setBallDirection({ dx: newDX, dy: newDY });

      } else if (boardData[newY][newX] === 'Y') {
        let newDX = Math.random() > 0.5 ? -dx : dx;
        let newDY = Math.random() > 0.5 ? -dy : dy;
        setBallPosition({ x: newX, y: newY });
        boardData[newY][newX] = 'X'; // Change 'Y' to 'X'
        setBallDirection({ dx: newDX, dy: newDY });

      } else {
        setBallPosition({ x: newX, y: newY });
      }
    }, 20);

    return () => {
      clearInterval(interval);
    };
  }, [ballPosition, ballDirection]);


  return (
    <div>
      {boardData.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((col, colIndex) => (
            <div

              key={colIndex}
              style={{
                width: 50,
                height: 50,
                border: '1px solid black',
                backgroundColor:
                  col === 'X' ? 'grey' : col === '0' ? 'white' : 'green',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {col === '0' &&
                ballPosition.x === colIndex &&
                ballPosition.y === rowIndex &&
                '⚽'}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BouncingBallGame;
