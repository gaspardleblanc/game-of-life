import React from 'react';

const Cell = ({ alive, toggleCell }) => {
    return (
        <div className={`cell ${alive ? 'alive' : ''}`} onClick={toggleCell}></div>
    );
};

export default Cell;
