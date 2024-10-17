import React, { useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import './styles.css';

const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark' : 'light'}>
            <h1>Conway's Game of Life</h1>
            <Controls toggleDarkMode={toggleDarkMode} />
            <Board />
        </div>
    );
};

export default App;
