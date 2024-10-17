import React from 'react';

const Controls = ({ toggleDarkMode }) => {
    return (
        <div className="controls">
            <button onClick={toggleDarkMode}>Toggle Dark/Light Mode</button>
        </div>
    );
};

export default Controls;
