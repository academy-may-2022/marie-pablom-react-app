import React from 'react';

const Board = () => {
  const renderSquare = i => {
    return <Square value={i} />;
  };

  return (
    <div>
      <div className="status">{/*status*/}</div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
