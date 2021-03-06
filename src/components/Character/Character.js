import React from 'react';
import './Character.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Character = (props) => {
    const { img, name, cartoon, trp, creator, cost } = props.character;
    return (
        <div className="single-card">
            <div className="card bg-transparent border-0 h-100 character ">
                <img src={img} alt="" />
                <h3>Name: {name}</h3>
                <h6>Cartoon Name: {cartoon}</h6>
                <p>TRP: {trp}</p>
                <p><small>Creator: {creator}</small></p>
                <h5>Cost: ${cost}</h5>
                <button
                    onClick={() => props.handleAddToList(props.character)}
                    className="btn btn-success"
                > <FontAwesomeIcon icon={faUserPlus} /> Add to List</button>
            </div>
        </div>
    );
};

export default Character;