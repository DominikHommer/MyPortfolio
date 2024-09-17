import { useState } from 'react';
import axios from 'axios';

export function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [status, setStatus] = useState("Next player: X");
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [difficulty, setDifficulty] = useState('easy');
  const [winningLine, setWinningLine] = useState([]); 

  const handleClick = (index) => {
    if (board[index] || !isUserTurn || winningLine.length > 0) return; 

    const newBoard = board.slice();
    newBoard[index] = 'X'; 
    setBoard(newBoard);
    setIsUserTurn(false);

    setTimeout(() => {
      axios.post(`http://127.0.0.1:5000/tictactoe/make_move/${difficulty}`, { board: newBoard })
        .then(response => {
          const data = response.data;
          const aiMove = data.move;
          const winner = data.winner;
          const winLine = data.win_line;

          if (aiMove !== null) {
            newBoard[aiMove] = 'O'; 
            setBoard(newBoard);
          }

          if (winner === 'draw') {
            setStatus('It\'s a draw!');
          } else if (winner) {
            setStatus(`Winner: ${winner}`);
            if (winLine) {
              setWinningLine(winLine); 
            }
          } else {
            setStatus('Next player: X');
            setIsUserTurn(true);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setIsUserTurn(true);
        });
    }, 1000);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setStatus("Next player: X"); 
    setIsUserTurn(true);  
    setWinningLine([]);
  };

  return {
    board,
    status,
    handleClick,
    difficulty,
    setDifficulty,
    winningLine,  
    resetGame,
  };
}

export default TicTacToe;





