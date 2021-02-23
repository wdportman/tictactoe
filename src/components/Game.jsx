import React, {useState} from 'react';
import Board from './Board';
import { usePlayGame } from '../hooks/usePlayGame';

const styles = {
  width: '200px',
  margin: '20px auto'
};

export default function Game() {

  const {calculateWinner} = usePlayGame();

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    //Create shallow copy of state:
    const boardCopy = [...board];
    if (winner || boardCopy[i]) {
      return;
    };
    // Add X or O depending on whether X is up:
    boardCopy[i] = xIsNext ? 'X' : 'O';
    // Update board w/ current turn results:
    setBoard(boardCopy);
    // Switch from X to O or vice-versa:
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {

  };

  const renderMoves = () => {
    return <button onClick={() => setBoard(Array(9).fill(null))}>New Game</button>
  };

  return (
    <>
      <Board squares={board} onClick={handleClick}></Board>
      <div style={styles}>
        <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        {renderMoves()}
      </div>
    </>
  )
};