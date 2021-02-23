const usePlayGame = () => {

  //The below function is from official React docs: https://reactjs.org/tutorial/tutorial.html
  function calculateWinner(squares) {
    //Below are all of the possible winning combinations:
    const winningMoves = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winningMoves.length; i++) {
      const [a, b, c] = winningMoves[i];
      //Check if there are all X's or all O's for any of the above winningMoves:
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  return {calculateWinner}
}

export {usePlayGame}