import React from 'react';
import Square from './Square';

export default function Board(props) {

  const { squares, onClick } = props;

  return (
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  )
};