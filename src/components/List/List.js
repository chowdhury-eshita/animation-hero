import React from 'react';
import './List.css'

const List = (props) => {
    const { list } = props;
    let total = 0;
    for (const character of list) {
        total = total + character.cost;
    }

    return (
        <div className="list-field">
            <h3>Sorted List</h3>
            <h5>Character Count: {list.length}</h5>
            <h5>Total Making Cost: ${total}</h5>
            {
                list.map(character => <h5 key={character.id}>{character.name}</h5>)

            }

        </div>
    );
};

export default List;