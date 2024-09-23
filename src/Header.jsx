// src/components/Header.js
import React from 'react';
import './App.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
              <span className='letter'>Printify Clone</span></div>
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
