import React, { useState } from 'react';
import { Typography, Grid, Button } from '@mui/material';

export default function TicTacToe() {
  // 1. Need a board with an empty state:
  const initialBoard = new Array(9).fill(null);

  const calculateWinner = (squares) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ];
    for (let x = 0; x < winningLines.length; x++) {
      const [a, b, c] = winningLines[x];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleReset = () => {
    setSquares(initialBoard);
  };

  const [squares, setSquares] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const letterToInsert = xIsNext ? 'X' : 'O';

  const handleClick = (x) => {
    if (squares[x]) {
      alert('This square has already been chosen!');
      return;
    }
    if (calculateWinner(squares)) {
      alert('This game has ended! Click Reset Board to play again.');
      return;
    }
    // Set the index of the array you clicked
    const newSquares = squares.slice();
    newSquares[x] = letterToInsert;

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index) => {
    const contents = squares[index];
    return (
      <Button
        variant="outlined"
        sx={{
          margin: '2px',
          color: 'primary'
        }}
        onClick={() => {
          handleClick(index);
        }}>
        <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
          {contents ? contents : '--'}
        </Typography>
      </Button>
    );
  };

  const winner = calculateWinner(squares);

  return (
    <Grid container direction="column">
      {winner ? (
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
          Congrats to the winner, Team {winner}!
        </Typography>
      ) : (
        <Typography variant="h5" color="primary" sx={{ fontWeight: 700 }}>
          Its Team {letterToInsert}s turn!
        </Typography>
      )}
      <Grid item>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Grid>
      <Grid item>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Grid>
      <Grid item>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Grid>
      <Grid item container>
        <Button sx={{ background: 'primary', marginTop: '10px' }} onClick={handleReset}>
          Reset Board
        </Button>
      </Grid>
    </Grid>
  );
}
