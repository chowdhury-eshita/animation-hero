import React, { useEffect, useState } from 'react';
import Character from '../Character/Character';
import 'react-bootstrap';
import './Container.css';
import List from '../List/List';
const Container = () => {
    const [characters, setCharacters] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch('./characterdb.JSON')
            .then(res => res.json())
            .then(data => setCharacters(data));
    }, [])

    const handleAddToList = (character) => {
        const newList = [...list, character];
        setList(newList);
    }
    return (
        <>
            <div className="navbar">
                <div className="nav">
                    <a href="#home">Home</a>
                    <a href="#list">Review List</a>
                    <a href="#about">About</a>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="Search Character" />
                    <button>Search</button>
                </div>
            </div>
            <div className="main-container container">
                <div className="character-container">
                    {
                        characters.map(character => <Character
                            key={character.id}
                            character={character}
                            handleAddToList={handleAddToList}
                        ></Character>)
                    }
                </div>
                <div className="list">
                    <List list={list}></List>
                </div>
            </div>
        </>
    );
};

export default Container;