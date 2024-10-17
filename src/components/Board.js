import React, { useState } from 'react';
import Cell from './Cell';

const numRows = 30;
const numCols = 30;

const Board = () => {
    const [grid, setGrid] = useState(Array(numRows).fill().map(() => Array(numCols).fill(false)));

    const toggleCell = (row, col) => {
        const newGrid = grid.map((r, rIndex) => r.map((c, cIndex) => (rIndex === row && cIndex === col ? !c : c)));
        setGrid(newGrid);
    };

    return (
        <div className="board">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <Cell key={colIndex} alive={cell} toggleCell={() => toggleCell(rowIndex, colIndex)} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
