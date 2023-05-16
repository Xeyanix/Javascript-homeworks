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
  ['X', '0', '0', '0', 'X', '0', '0', '0', '0', '0', 'Y', 'X'],
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
      // Update ball position based on direction
      const { x, y } = ballPosition;
      const { dx, dy } = ballDirection;

      const newX = x + dx;
      const newY = y + dy;

      if (boardData[newY][newX] === 'X' || boardData[newY][newX] === 'Y') {
        let newDX = dx;
        let newDY = dy;

        if (
          boardData[x][newX] === 'X' ||
          boardData[newY][y + 1] === 'X' ||
          boardData[newY][newX] === 'Y'
        ) {
          newDX = -dx;
        }
        if (
          boardData[newY][x] === 'X' ||
          boardData[newY][y] === 'X' ||
          boardData[x][newY] === 'Y'
        ) {
          newDY = -dy;
        }

        // Set the new direction
        setBallDirection({ dx: newDX, dy: newDY });
      } else {
        // Update ball position
        setBallPosition({ x: newX, y: newY });
      }
    }, 100);

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
