// ThemeToggle.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from './actions';

const ThemeToggle = ({children}) => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector(state => state.isDarkTheme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    return (
        <div style={{ backgroundColor: isDarkTheme ? '#333' : '#FFF', color: isDarkTheme ? '#FFF' : '#000', padding: '20px' }}>
            <h1>Текущая тема: {isDarkTheme ? 'Темная' : 'Светлая'}</h1>
            <button onClick={handleToggle}>
                Переключить тему
            </button>
            {children}
        </div>
    );
};

export default ThemeToggle;
