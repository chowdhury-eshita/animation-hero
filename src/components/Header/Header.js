import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1>Famous Animation/Cartoon Characters</h1>
            <p>Make a Character team for an animation Movie.</p>
            <h3>Total Budget: 10 Million</h3>
            <br />
            <div className="navbar">
                <div className="nav">
                    <a href="#home">Home</a>
                    <a href="#list">List Review</a>
                    <a href="#about">About</a>
                </div>
                <div className="input-field">
                    <input type="text" />
                    <button>Search</button>
                </div>
            </div>
        </div>
    );
};

export default Header;