import './TicTacToe.css';
import './App.css';
import React, { useState } from 'react';

const TicTacToe = () => {
    const [turn, setTurn] = useState('X');
    const [cells, setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('');

    const checkForWinner = (squares) => {
        let combos = {
            diagonal: [
                [0, 4, 8],
                [2, 4, 6]
            ],
            across: [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8]
            ],
            down: [
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8]
            ]
        }

        for (let combo in combos) {
            combos[combo].forEach(element => {
                if (squares[element[0]] === '' ||
                    squares[element[1]] === '' ||
                    squares[element[0]] === '') {
                    //
                }
                else if (squares[element[0]] === squares[element[1]] &&
                    squares[element[1]] === squares[element[2]]) {
                    setWinner(squares[element[0]]);
                }
            });
        }
    }

    const handleClick = (num) => {
        if (cells[num] !== '') {
            alert("Already Clicked");
            return;
        }
        let squares = [...cells];
        if (turn === 'X') {
            squares[num] = 'X';
            setTurn('O');
        }
        else {
            squares[num] = 'O';
            setTurn('X');
        }
        setCells(squares);
        checkForWinner(squares);
        console.log(squares);
    }
    const handleRestart = () =>{
        setWinner(null);
        setCells(Array(9).fill(''));
    }
    const Cell = ({ num }) => {
        return <td onClick={() => handleClick(num)}>{cells[num]}</td>
    }
    return (<>
        <div className='App'>
            <div className='Container'>
            <h1>Tic-Tac-Toe</h1>
            <button onClick={() => handleRestart()} className='btnReset'>Reset</button>
                <table>
                    <h4>Turn : {turn}  </h4>
                    <tbody>
                        <tr>
                            <Cell num={0} />
                            <Cell num={1} />
                            <Cell num={2} />
                        </tr>
                        <tr>
                            <Cell num={3} />
                            <Cell num={4} />
                            <Cell num={5} />
                        </tr>
                        <tr>
                            <Cell num={6} />
                            <Cell num={7} />
                            <Cell num={8} />
                        </tr>
                    </tbody>
                </table>
                {winner && (
                    <>
                        <p>[ {winner} ] is the winner!</p>
                        <button onClick={()=>handleRestart()}>Play Again</button>
                    </>
                )}
            </div>
        </div>
    </>
    );
}

export default TicTacToe;
